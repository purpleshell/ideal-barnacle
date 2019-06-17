import React, { useContext } from "react";
import { ToggleModalContext } from "../../store/Context";
import {
  useEmailInput,
  useNewPasswordInput,
  useUsernameInput
} from "../inputs/InputHooks";
import { REGISTER_USER } from "../Schema";
import MutationForm from "./MutationForm";

const RegisterUserForm = () => {
  const { ...username } = useUsernameInput();
  const { ...email } = useEmailInput();
  const { ...password } = useNewPasswordInput();
  const inputs = [username, email, password];
  const userRegistrationInfo = {
    username: username.value,
    email: email.value,
    password: password.value
  };

  const { toggleLoginModal, toggleRegisterModal } = useContext(
    ToggleModalContext
  );

  const onCompleted = () => {
    toggleLoginModal();
    toggleRegisterModal();
  };

  return (
    <MutationForm
      mutation={REGISTER_USER}
      variables={{ userRegistrationInfo }}
      inputs={inputs}
      onCompleted={onCompleted}
      ctaText="SUBSCRIBE"
    />
  );
};

export default RegisterUserForm;
