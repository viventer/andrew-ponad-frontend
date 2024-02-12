import { useEffect, useState, useRef } from "react";
import { StyledAuth } from "../../auth/styles/Login.styled";
import ChangePasswordForm from "./ChangePasswordForm";
import { useLoginMutation } from "../../auth/slices/authApiSlice";
import useValidation from "../../../hooks/useValidation";
import DynamicErrorNotification from "./DynamicErrorNotification";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import SuccessInfo from "./SuccessInfo";

export default function ChangePasswordWindow({
  username,
  roles,
  userId,
  finished,
  setFinished,
}) {
  const [errMsg, setErrMsg] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();
  const passwordRequirementsRef = useRef();

  const { validations, setValidations, validateField } = useValidation(
    {
      passwordRef: newPasswordRef,
      confirmPasswordRef: confirmNewPasswordRef,
      passwordRequirementsRef,
    },
    {
      password: inputs.newPassword,
      confirmPassword: inputs.confirmNewPassword,
    }
  );

  const handleInputChange = (fieldName, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
    if (fieldName == "newPassword") fieldName = "password";
    else if (fieldName == "confirmNewPassword") fieldName = "confirmPassword";
    setValidations((prevValidations) => ({
      ...prevValidations,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  useEffect(() => {
    oldPasswordRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [inputs]);

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [updateUser, { isLoading: isUpdateLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAllDataExist) {
      setErrMsg("Uzupełnij wszystkie pola");
      return;
    } else if (!isAllDataValid) {
      console.log(validations);
      setErrMsg("Wprowadzone dane są niepoprawne");
      return;
    }
    try {
      await login({
        username,
        password: inputs.oldPassword,
      }).unwrap();
      await updateUser({
        userId,
        initialUserData: { username, password: inputs.newPassword, roles },
      }).unwrap();
      setInputs({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
      setFinished(true);
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 5000);
    } catch (err) {
      handleChangePasswordError(err);
    }
  };

  const handleChangePasswordError = (err) => {
    if (!err.originalStatus && !err.status) {
      setErrMsg("Brak odpowiedzi serwera");
    } else if (err.originalStatus === 400) {
      setErrMsg(err.data?.message);
    } else if (err.status === 422) {
      setErrMsg("Wprowadzone dane zawierają obraźliwe słowa");
    } else if (err.status === 401) {
      setErrMsg("Stare hasło jest błędne");
    } else {
      setErrMsg(err.data?.message);
    }
  };

  useEffect(() => {
    if (isUpdateLoading || isLoginLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isUpdateLoading, isLoginLoading]);

  const isAllDataValid = validations.password && validations.confirmPassword;
  const isAllDataExist = Object.values(inputs).every(Boolean);

  const canSubmit = isAllDataExist && isAllDataValid;

  return !finished ? (
    <StyledAuth>
      <h2>Zmień hasło</h2>
      <ChangePasswordForm
        oldPasswordRef={oldPasswordRef}
        handlers={{
          handleSubmit,
          handleInputChange,
        }}
        inputs={inputs}
        references={{
          oldPasswordRef,
          newPasswordRef,
          confirmNewPasswordRef,
          passwordRequirementsRef,
        }}
        canSubmit={canSubmit}
      />
      {errMsg && <DynamicErrorNotification message={errMsg} />}
    </StyledAuth>
  ) : showSuccessMsg ? (
    <SuccessInfo message={"Hasło zostało zmienione"} />
  ) : (
    <></>
  );
}
