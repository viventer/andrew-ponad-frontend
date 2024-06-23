import { useState } from "react";
import { StyledCategoryNameInput } from "../styles/CategoryNameInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../../global/slices/globalStatesSlice";
import { useChangeCategoryNameMutation } from "../../global/slices/categoriesApiSlice";

export default function CategoryNameInput({ categoryData }) {
  const [newCategoryName, setNewCategoryName] = useState(categoryData.name);
  const dispatch = useDispatch();

  const [changeCategoryNameMutation, { isLoading, isSuccess }] =
    useChangeCategoryNameMutation();

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

  return (
    <StyledCategoryNameInput>
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
      />
      <button onClick={changeName}>
        {showSuccessIcon ? (
          <FontAwesomeIcon icon={faCheckCircle} className="successIcon icon" />
        ) : (
          <FontAwesomeIcon icon={faSave} className="saveIcon icon" />
        )}
      </button>
    </StyledCategoryNameInput>
  );
}
