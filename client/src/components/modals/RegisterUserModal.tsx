import React, { useContext } from "react";
import { ToggleModalContext } from "../../store/Context";
import RegisterUserForm from "../forms/RegisterUserForm";
import Modal from "./Modal";

const RegisterUserModal = () => {
  const { toggleLoginUserModal, toggleRegisterUserModal } = useContext(
    ToggleModalContext
  );
  return (
    <Modal title="Subscribe to Overload" toggleModal={toggleRegisterUserModal}>
      <RegisterUserForm />
      <h4 className="subtext">
        Already have an account?{" "}
        <span
          className="primary pointer"
          onClick={() => {
            toggleRegisterUserModal();
            toggleLoginUserModal();
          }}
        >
          Log in.
        </span>
      </h4>
    </Modal>
  );
};

export default RegisterUserModal;
