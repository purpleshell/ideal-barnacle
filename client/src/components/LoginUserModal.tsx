import React from "react";
import LoginUserForm from "./LoginUserForm";

const LoginUserModal = ({ onClick }: any) => {
  return (
    <>
      <div className="backdrop" onClick={onClick} />
      <div className="modal center open login-modal">
        <div className="modal-header">
          <svg
            className="close-modal-button pointer"
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </div>
        <div className="modal-content">
          <LoginUserForm />
        </div>
      </div>
    </>
  );
};

export default LoginUserModal;
