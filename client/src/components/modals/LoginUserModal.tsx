import React, { useContext } from "react";
import { ToggleModalContext } from "../../store/Context";
import LoginUserForm from "../forms/LoginUserForm";
import Modal from "./Modal";

const LoginUserModal = () => {
  const { toggleLoginUserModal, toggleRegisterUserModal } = useContext(
    ToggleModalContext
  );
  return (
    <Modal title="Log in to Overload" toggleModal={toggleLoginUserModal}>
      <LoginUserForm />
      <h4 className="subtext primary pointer">Forgot your password?</h4>
      <h4 className="subtext">
        Don't have an account?{" "}
        <span
          className="primary pointer"
          onClick={() => {
            toggleRegisterUserModal();
            toggleLoginUserModal();
          }}
        >
          Start your free trial.
        </span>
      </h4>
    </Modal>
  );
};

export default LoginUserModal;
