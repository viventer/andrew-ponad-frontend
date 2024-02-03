import { useEffect, useState, useRef } from "react";
import { StyledAuth } from "../../auth/styles/Login.styled";
import ChangePasswordForm from "./ChangePasswordForm";
import { useLoginMutation } from "../../auth/slices/authApiSlice";
import useValidation from "../../../hooks/useValidation";
import ErrorInfo from "./ErrorInfo";
import { HashLoader } from "react-spinners";

export default function ChangePasswordWindow({ username }) {
  const [errMsg, setErrMsg] = useState("");

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

  const [login, { isLoading }] = useLoginMutation();

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
    } catch (err) {
      console.log(username, inputs.oldPassword);
      handleChangePasswordError(err);
    }
  };

  const handleChangePasswordError = (err) => {};

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" className="hashLoader" />
      </div>
    );

  const isAllDataValid = validations.password && validations.confirmPassword;
  const isAllDataExist = Object.values(inputs).every(Boolean);

  const canSubmit = isAllDataExist && isAllDataValid;

  return (
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
      {errMsg && <ErrorInfo message={errMsg} />}
    </StyledAuth>
  );
}
