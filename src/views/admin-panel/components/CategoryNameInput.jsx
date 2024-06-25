import { useEffect, useRef, useState } from "react";
import { StyledCategoryNameInput } from "../styles/CategoryNameInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheckCircle,
  faCircleExclamation,
  faPencil,
  faPlus,
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
  isDataCorrect,
  setIsDataCorrect,
  isSaved,
  setIsSaved,
  setIsInputFocused,
  isInputFocused,
  newCategoryName,
  setNewCategoryName,
}) {
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
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
    inputRef.current.focus();
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
