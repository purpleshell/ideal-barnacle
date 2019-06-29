import React, { useContext } from "react";
import { AM_I_LOGGED_IN, LOGIN_USER } from "../../schema";
import { ToggleModalContext } from "../../store/Context";
import { useCurrentPasswordInput, useEmailInput } from "../inputs/InputHooks";
import MutationForm from "./MutationForm";

const LoginUserForm = () => {
  const { ...email } = useEmailInput();
  const { ...password } = useCurrentPasswordInput();
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
