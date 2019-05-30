import React, { useContext } from "react";
import { ToggleModalContext } from "../../pages/LandingPage";
import { useEmailInput, useNewPasswordInput } from "../inputs/InputHooks";
import { AM_I_LOGGED_IN, LOGIN_USER } from "../Schema";
import MutationForm from "./MutationForm";

const LoginUserForm = () => {
  const { ...email } = useEmailInput();
  const { ...password } = useNewPasswordInput();
  const inputs = [email, password];
  const userLoginInfo = {
    email: email.value,
    password: password.value
  };

  const { toggleLoginModal } = useContext(ToggleModalContext);

  return (
    <MutationForm
      mutation={LOGIN_USER}
      refetchQueries={[{ query: AM_I_LOGGED_IN }]}
      variables={{ userLoginInfo }}
      inputs={inputs}
      onCompleted={toggleLoginModal}
      ctaText="LOG IN"
    />
  );
};

export default LoginUserForm;
