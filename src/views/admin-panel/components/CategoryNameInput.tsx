import { useEffect, useRef, useState } from "react";
import { StyledCategoryNameInput } from "../styles/CategoryNameInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheckCircle,
  faPencil,
  faPlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  Category,
  useChangeCategoryNameMutation,
  useCreateNewCategoryMutation,
} from "../../global/slices/categoriesApiSlice";

type Props = {
  categoryData?: Category;
  setReloadComponent: React.Dispatch<React.SetStateAction<boolean>>;
  toBeAdded?: boolean;
  isDataCorrect: boolean;
  setIsDataCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isInputFocused: boolean;
  newCategoryName: string;
  setNewCategoryName: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategoryNameInput({
  categoryData,
  setReloadComponent,
  toBeAdded,
  isDataCorrect,
  setIsDataCorrect,
  setIsSaved,
  setIsInputFocused,
  isInputFocused,
  newCategoryName,
  setNewCategoryName,
}: Props) {
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [
    changeCategoryNameMutation,
    { isLoading: isChangingLoading, isSuccess: isChangingSuccess },
  ] = useChangeCategoryNameMutation();
  const [
    createNewCategoryMutation,
    { isLoading: isCreatingLoading, isSuccess: isCreatingSuccess },
  ] = useCreateNewCategoryMutation();

  const changeName = async () => {
    if (categoryData!.name == newCategoryName) {
      dispatch(setErrMsg("Nazwa kategorii nie uległa zmianie."));
      return;
    }

    try {
      await changeCategoryNameMutation({
        id: categoryData!.id,
        newName: newCategoryName,
      }).unwrap();
    } catch (err) {
      dispatch(setErrMsg("Błąd zmiany nazwy kategorii."));
    }
  };

  const addCategory = async () => {
    try {
      await createNewCategoryMutation(newCategoryName).unwrap();
      setShowNewCategoryInput(false);
      setNewCategoryName("");
    } catch (err) {
      handleCreateCategoryError(err);
    }
  };

  const handleCreateCategoryError = (err: any) => {
    if (
      (!err?.originalStatus && !err?.status) ||
      err?.status === "FETCH_ERROR"
    ) {
      console.log(err);
      dispatch(setErrMsg("Brak odpowiedzi serwera"));
    } else if (err.originalStatus === 400 || err.status === 400) {
      dispatch(setErrMsg("Uzupełnij wymagane pola"));
    }
  };

  useEffect(() => {
    if (isCreatingLoading || isChangingLoading) {
      dispatch(setIsLoading(true));
    } else if (isChangingSuccess || isCreatingSuccess) {
      dispatch(setIsLoading(false));
      if (isChangingSuccess) {
        setShowSuccessIcon(true);
        setTimeout(() => {
          setShowSuccessIcon(false);
          setReloadComponent((prev) => !prev);
        }, 1500);
      }
    } else {
      dispatch(setIsLoading(false));
    }
  }, [
    isChangingLoading,
    isChangingSuccess,
    isCreatingLoading,
    isCreatingSuccess,
  ]);

  const isNewNameDifferent = newCategoryName != categoryData?.name;
  useEffect(() => {
    if (isNewNameDifferent) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
    setIsDataCorrect(
      (newCategoryName.length >= 3 && newCategoryName.length <= 24) ||
        !isNewNameDifferent
    );
  }, [newCategoryName, isNewNameDifferent]);

  const addInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledCategoryNameInput onClick={() => setShowNewCategoryInput(true)}>
      {showNewCategoryInput || !toBeAdded ? (
        <div>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Nazwa kategorii"
            ref={inputRef}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            maxLength={24}
            onKeyDown={(e) => {
              if (e.key === "Enter" && toBeAdded) {
                addCategory();
                setIsInputFocused(false);
              } else if (newCategoryName.length >= 24) {
                dispatch(
                  setErrMsg(
                    "Nazwa kategorii może zawierać maksymalnie 24 znaki"
                  )
                );
              }
            }}
          />
          <button
            onClick={() => {
              if (toBeAdded) addCategory();
              else if (isNewNameDifferent) changeName();
              else addInputFocus();
            }}
            disabled={
              (!isDataCorrect || !isNewNameDifferent) &&
              (isInputFocused || toBeAdded)
            }
            className={
              isInputFocused || toBeAdded ? "saveButton" : "editButton"
            }
          >
            {showSuccessIcon ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="successIcon icon"
              />
            ) : isNewNameDifferent || isInputFocused ? (
              <FontAwesomeIcon
                icon={toBeAdded ? faPlus : faSave}
                className="saveIcon icon"
              />
            ) : (
              <FontAwesomeIcon icon={faPencil} className="editIcon icon" />
            )}
          </button>
        </div>
      ) : (
        <button className="createNewButton">
          <FontAwesomeIcon icon={faAdd} />
          <p>Utwórz nową</p>
        </button>
      )}
    </StyledCategoryNameInput>
  );
}
