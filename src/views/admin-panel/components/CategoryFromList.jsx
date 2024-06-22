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
} from "../../global/slices/globalStatesSlice";
import { useDeleteCategoryMutation } from "../../global/slices/categoriesApiSlice";

export default function CategoryFromList({ categoryData, setReloadComponent }) {
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

  return <div>CategoryFromList</div>;
}
