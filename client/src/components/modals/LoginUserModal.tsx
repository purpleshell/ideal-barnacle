import React from "react";
import LoginUserForm from "../forms/LoginUserForm";
import Modal from "./Modal";

const LoginUserModal = ({ toggleLoginModal, toggleRegisterModal }: any) => {
  return (
    <>
      <Modal title="Log in to Overload" toggleModal={toggleLoginModal}>
        <LoginUserForm />
        <h4 className="subtext">
          Don't have an account?{" "}
          <span
            className="primary pointer"
            onClick={() => {
              toggleRegisterModal();
              toggleLoginModal();
            }}
          >
            Start your free trial.
          </span>
        </h4>
      </Modal>
    </>
  );
};

export default LoginUserModal;
