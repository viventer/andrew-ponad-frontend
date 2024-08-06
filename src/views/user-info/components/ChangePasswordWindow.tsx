import { useEffect, useState, useRef, MutableRefObject } from "react";

import useValidation, { FieldName } from "../../../hooks/useValidation";
import { useUpdateUserMutation } from "../../global/slices/usersApiSlice";
import { useLoginMutation } from "../../auth/slices/authApiSlice";

import ChangePasswordForm from "./ChangePasswordForm";
import DynamicErrorNotification from "../../global/components/DynamicErrorNotification";
import SuccessInfo from "../../global/components/SuccessInfo";
import { StyledAuth } from "../../auth/styles/Auth.styled";
import { setIsLoading } from "../../global/slices/globalStatesSlice";
import { useDispatch } from "react-redux";

type Props = {
  username: string;
  roles: string[];
  userId: string;
  finished: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChangePasswordWindow({
  username,
  roles,
  userId,
  finished,
  setFinished,
}: Props) {
  const oldPasswordRef = useRef<HTMLInputElement>();
  const newPasswordRef = useRef<HTMLInputElement>();
  const confirmNewPasswordRef = useRef<HTMLInputElement>();
  const passwordRequirementsRef = useRef<HTMLElement>();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [updateUser, { isLoading: isUpdateLoading }] = useUpdateUserMutation();

  const [errMsg, setErrMsg] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (oldPasswordRef.current) {
      oldPasswordRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [inputs]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdateLoading || isLoginLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isUpdateLoading, isLoginLoading]);

  const { validations, setValidations, validateField } = useValidation(
    {
      passwordRef: newPasswordRef as MutableRefObject<HTMLInputElement>,
      confirmPasswordRef:
        confirmNewPasswordRef as MutableRefObject<HTMLInputElement>,
      passwordRequirementsRef:
        passwordRequirementsRef as MutableRefObject<HTMLElement>,
    },
    {
      password: inputs.newPassword,
      confirmPassword: inputs.confirmNewPassword,
    }
  );

  const handleInputChange = (fieldName: string, value: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldName]: value }));
    if (fieldName == "newPassword") fieldName = "password";
    else if (fieldName == "confirmNewPassword") fieldName = "confirmPassword";
    setValidations((prevValidations) => ({
      ...prevValidations,
      [fieldName]: validateField(fieldName as FieldName, value),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isAllDataExist) {
      setErrMsg("Uzupełnij wszystkie pola");
      return;
    } else if (!isAllDataValid) {
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
        userData: { username, password: inputs.newPassword, roles },
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

  const handleChangePasswordError = (err: any) => {
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

  const isAllDataValid = validations.password && validations.confirmPassword;
  const isAllDataExist = Object.values(inputs).every(Boolean);

  const canSubmit = isAllDataExist && isAllDataValid ? true : false;

  return !finished ? (
    <StyledAuth>
      <h2>Zmień hasło</h2>
      <ChangePasswordForm
        handlers={{
          handleSubmit,
          handleInputChange,
        }}
        inputs={inputs}
        references={{
          oldPasswordRef: oldPasswordRef as MutableRefObject<HTMLInputElement>,
          newPasswordRef: newPasswordRef as MutableRefObject<HTMLInputElement>,
          confirmNewPasswordRef:
            confirmNewPasswordRef as MutableRefObject<HTMLInputElement>,
          passwordRequirementsRef:
            passwordRequirementsRef as MutableRefObject<HTMLElement>,
        }}
        canSubmit={canSubmit}
      />
      {errMsg && (
        <DynamicErrorNotification message={errMsg} aria-live="assertive" />
      )}
    </StyledAuth>
  ) : showSuccessMsg ? (
    <SuccessInfo message={"Hasło zostało zmienione"} />
  ) : (
    <></>
  );
}
