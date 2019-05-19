import React from "react";
import RegisterUserForm from "../forms/RegisterUserForm";
import Modal from "./Modal";

const RegisterUserModal = ({ toggleRegisterModal }: any) => {
  return (
    <>
      <Modal title="Subscribe to Overload" toggleModal={toggleRegisterModal}>
        <RegisterUserForm />
      </Modal>
    </>
  );
};

export default RegisterUserModal;
