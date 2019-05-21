import React from "react";
import RegisterUserForm from "../forms/RegisterUserForm";
import Modal from "./Modal";

const RegisterUserModal = ({ toggleLoginModal, toggleRegisterModal }: any) => {
  return (
    <>
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
    </>
  );
};

export default RegisterUserModal;
