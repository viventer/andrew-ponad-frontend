import { useEffect, useState, useRef } from "react";
import { StyledAuth } from "../../auth/styles/Login.styled";
import ChangePasswordForm from "./ChangePasswordForm";
import { useLoginMutation } from "../../auth/slices/authApiSlice";

export default function ChangePasswordWindow({ username }) {
  const [errMsg, setErrMsg] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const oldPasswordRef = useRef();
  useEffect(() => {
    oldPasswordRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [oldPassword, newPassword, confirmNewPassword]);

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <StyledAuth>
      <h2>Zmień hasło</h2>
      <ChangePasswordForm references={{ oldPasswordRef }} />
    </StyledAuth>
  );
}
