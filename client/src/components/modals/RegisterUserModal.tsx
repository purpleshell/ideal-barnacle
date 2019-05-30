import React, { useContext } from "react";
import { ToggleModalContext } from "../../pages/LandingPage";
import RegisterUserForm from "../forms/RegisterUserForm";
import Modal from "./Modal";

const RegisterUserModal = () => {
  const { toggleLoginModal, toggleRegisterModal } = useContext(
    ToggleModalContext
  );
  return (
    <Modal title="Subscribe to Overload" toggleModal={toggleRegisterModal}>
      <RegisterUserForm />
      <h4 className="subtext">
        Already have an account?{" "}
        <span
          className="primary pointer"
          onClick={() => {
            toggleRegisterModal();
            toggleLoginModal();
          }}
        >
          Log in.
        </span>
      </h4>
    </Modal>
  );
};

export default RegisterUserModal;
