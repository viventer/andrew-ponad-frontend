import { useEffect, useRef, useState } from "react";
import { StyledCategoryNameInput } from "../styles/CategoryNameInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleExclamation,
  faPencil,
  faPlusCircle,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  useChangeCategoryNameMutation,
  useCreateNewCategoryMutation,
} from "../../global/slices/categoriesApiSlice";

export default function CategoryNameInput({
  categoryData,
  setReloadComponent,
  toBeAdded,
}) {
  const [newCategoryName, setNewCategoryName] = useState(
    categoryData?.name || ""
  );
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [
    changeCategoryNameMutation,
    { isLoading: isChangingLoading, isSuccess: isChangingSuccess },
  ] = useChangeCategoryNameMutation();
  const [
    createNewCategoryMutation,
    { isLoading: isCreatingLoading, isSuccess: isCreatingSuccess },
  ] = useCreateNewCategoryMutation();

  const changeName = async () => {
    if (categoryData.name == newCategoryName) {
      dispatch(setErrMsg("Nazwa kategorii nie uległa zmianie."));
      return;
    }

    try {
      await changeCategoryNameMutation({
        id: categoryData.id,
        newName: newCategoryName,
      }).unwrap();
    } catch (err) {
      if (!err?.originalStatus && !err?.status) {
        dispatch(
          setErrMsg("Brak odpowiedzi serwera. Sprawdź połączenie sieciowe.")
        );
      } else {
        dispatch(setErrMsg(err?.data?.message));
      }
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

  const handleCreateCategoryError = (err) => {
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
      setShowSuccessIcon(true);
      setTimeout(() => {
        setShowSuccessIcon(false);
        setReloadComponent((prev) => !prev);
      }, 1500);
    } else {
      dispatch(setIsLoading(false));
    }
  }, [
    isChangingLoading,
    isChangingSuccess,
    isCreatingLoading,
    isCreatingSuccess,
  ]);

  useEffect(() => {
    if (newCategoryName != categoryData?.name) {
      setIsSaved(false);
    }
  }, [newCategoryName]);

  const isNewNameDifferent = newCategoryName != categoryData?.name;
  const isDataCorrect =
    (newCategoryName.length >= 3 && newCategoryName.length && 24) ||
    !isNewNameDifferent;

  const addInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <StyledCategoryNameInput
      className={
        !isDataCorrect
          ? "incorrectData"
          : isSaved || !isNewNameDifferent
          ? "saved"
          : "unSaved"
      }
    >
      {toBeAdded && <FontAwesomeIcon icon={faPlusCircle} className="icon" />}
      {showNewCategoryInput || !toBeAdded ? (
        <>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Nazwa kategorii"
            ref={inputRef}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <button
            onClick={() => {
              if (toBeAdded) addCategory();
              else if (isNewNameDifferent) changeName();
              else addInputFocus();
            }}
            disabled={(!isDataCorrect || !isNewNameDifferent) && isInputFocused}
            className={isInputFocused ? "saveButton" : "editButton"}
          >
            {showSuccessIcon ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="successIcon icon"
              />
            ) : isNewNameDifferent || isInputFocused ? (
              <FontAwesomeIcon icon={faSave} className="saveIcon icon" />
            ) : (
              <FontAwesomeIcon icon={faPencil} className="editIcon icon" />
            )}
          </button>
        </>
      ) : (
        <button onClick={() => setShowNewCategoryInput(true)}>
          Utwórz nową kategorię
        </button>
      )}
      {!isDataCorrect && (
        <div className="flex">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p>Nazwa może zawierać od 3 do 24 znaków.</p>
        </div>
      )}
    </StyledCategoryNameInput>
  );
}
