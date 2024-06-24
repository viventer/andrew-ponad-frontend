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
import { faCompass, faTrash } from "@fortawesome/free-solid-svg-icons";
import CategoryNameInput from "./CategoryNameInput";
import { StyledCategoryFromList } from "../styles/CategoryFromList.styled";

export default function CategoryFromList({
  categoryData,
  setReloadComponent,
  toBeAdded,
}) {
  const [isDeleted, setIsDeleted] = useState(false);

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
    <StyledCategoryFromList className={`${isDeleted ? "hide" : ""}`}>
      <CategoryNameInput
        categoryData={categoryData}
        setReloadComponent={setReloadComponent}
        toBeAdded={toBeAdded}
      />
      {!toBeAdded && (
        <button className="deleteButton" onClick={deleteCategory}>
          <FontAwesomeIcon icon={faTrash} className="icon" />
        </button>
      )}
    </StyledCategoryFromList>
  );
}
