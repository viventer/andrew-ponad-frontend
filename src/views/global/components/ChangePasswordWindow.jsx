import { useEffect, useState, useRef } from "react";
import { StyledAuth } from "../../auth/styles/Login.styled";
import ChangePasswordForm from "./ChangePasswordForm";
import { useLoginMutation } from "../../auth/slices/authApiSlice";
import useValidation from "../../../hooks/useValidation";

export default function ChangePasswordWindow({ username }) {
  const [errMsg, setErrMsg] = useState("");

  const { validations, setValidations, validateField } = useValidation(
    {
      oldPasswordRef,
      newPasswordRef,
      confirmNewPasswordRef,
    },
    inputs
  );

  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const handleInputChange = (fieldName, value) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
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
  };

  if (isLoading)
    return (
      <div className="flex">
        <HashLoader color="fff" className="hashLoader" />
      </div>
    );

  const canSubmit = oldPassword && newPassword && confirmNewPassword;

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
        }}
        canSubmit={canSubmit}
      />
    </StyledAuth>
  );
}
