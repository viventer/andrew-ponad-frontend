import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";
import {
  Category,
  useDeleteCategoryMutation,
} from "../../global/slices/categoriesApiSlice";

import CategoryNameInput from "./CategoryNameInput";
import { StyledCategoryFromList } from "../styles/CategoryFromList.styled";

type Props = {
  setReloadComponent: React.Dispatch<React.SetStateAction<boolean>>;
  categoryData?: Category;
  toBeAdded?: boolean;
};

export default function CategoryFromList({
  categoryData,
  setReloadComponent,
  toBeAdded,
}: Props) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [isDataCorrect, setIsDataCorrect] = useState(toBeAdded ? false : true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState(
    categoryData?.name || ""
  );

  const dispatch = useDispatch();

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deleteCategory${categoryData?.id}`));
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć kategorię? Ta operacja jest nieodwracalna."
      )
    );
  };

  useEffect(() => {
    if (
      dialogAnswer == "Tak" &&
      dialogAction == `deleteCategory${categoryData?.id}`
    ) {
      deleteCategory();
    }
    dispatch(setDialogAnswer(""));
    dispatch(setDialogAction(""));
  }, [dialogAnswer]);

  const [deleteCategoryMutation, { isLoading: isDeletingLoading }] =
    useDeleteCategoryMutation();

  const deleteCategory = async () => {
    try {
      await deleteCategoryMutation(categoryData!.id).unwrap();
      if (isDeletingLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLoading(false));
        setReloadComponent((prev) => !prev);
        setIsDeleted(true);
      }
    } catch (err) {
      dispatch(setErrMsg("Błąd usuwania kategorii."));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <StyledCategoryFromList
      className={`${
        isDeleted
          ? "hide"
          : !isDataCorrect
          ? "incorrectData"
          : isSaved
          ? "saved"
          : "unSaved"
      } ${isInputFocused ? "inputFocused" : ""} ${
        toBeAdded ? "toBeAdded" : ""
      }`}
    >
      <div className="flex">
        <CategoryNameInput
          categoryData={categoryData}
          setReloadComponent={setReloadComponent}
          toBeAdded={toBeAdded}
          setIsDataCorrect={setIsDataCorrect}
          isDataCorrect={isDataCorrect}
          setIsSaved={setIsSaved}
          setIsInputFocused={setIsInputFocused}
          isInputFocused={isInputFocused}
          newCategoryName={newCategoryName}
          setNewCategoryName={setNewCategoryName}
        />
        {!toBeAdded && (
          <button className="deleteButton" onClick={showDialog}>
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
        )}
      </div>
      {!isDataCorrect && (!toBeAdded || newCategoryName) && (
        <div className="flex formatInfo">
          <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
          <p>Nazwa może zawierać od 3 do 24 znaków.</p>
        </div>
      )}
    </StyledCategoryFromList>
  );
}
