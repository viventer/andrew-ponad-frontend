import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { useDeleteCategoryMutation } from "../../global/slices/categoriesApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCompass,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import CategoryNameInput from "./CategoryNameInput";
import { StyledCategoryFromList } from "../styles/CategoryFromList.styled";

export default function CategoryFromList({
  categoryData,
  setReloadComponent,
  toBeAdded,
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [isDataCorrect, setIsDataCorrect] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deleteCategory${categoryData.id}`));
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć kategorię? Ta operacja jest nieodwracalna."
      )
    );
  };

  useEffect(() => {
    if (
      dialogAnswer == "Tak" &&
      dialogAction == `deleteCategory${categoryData.id}`
    ) {
      deleteCategory();
    }
    dispatch(setDialogAnswer(null));
    dispatch(setDialogAction(null));
  }, [dialogAnswer]);

  const [deleteCategoryMutation, { isDeletingLoading }] =
    useDeleteCategoryMutation();

  const deleteCategory = async () => {
    try {
      await deleteCategoryMutation(categoryData.id).unwrap();
      if (isDeletingLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLoading(false));
        setReloadComponent((prev) => !prev);
        setIsDeleted(true);
      }
    } catch (err) {
      dispatch(setErrMsg(err?.data?.message || "Błąd usuwania kategorii."));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <StyledCategoryFromList
      className={
        isDeleted
          ? "hide"
          : !isDataCorrect
          ? "incorrectData"
          : isSaved
          ? "saved"
          : "unSaved"
      }
    >
      <div className="flex">
        <CategoryNameInput
          categoryData={categoryData}
          setReloadComponent={setReloadComponent}
          toBeAdded={toBeAdded}
          setIsDataCorrect={setIsDataCorrect}
          isDataCorrect={isDataCorrect}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
        />
        {!toBeAdded && (
          <button className="deleteButton" onClick={deleteCategory}>
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
        )}
      </div>
      {!isDataCorrect && !toBeAdded && (
        <div className="flex formatInfo">
          <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
          <p>Nazwa może zawierać od 3 do 24 znaków.</p>
        </div>
      )}
    </StyledCategoryFromList>
  );
}
