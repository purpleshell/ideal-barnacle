import React from "react";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";

const Modal = ({ toggleModal, title, children }: any) => {
  return (
    <>
      <div className="backdrop" onClick={toggleModal} />
      <div className="modal center open login-modal">
        <div className="modal-header">
          <CloseIcon
            className="close-modal-button pointer right"
            onClick={toggleModal}
          />
        </div>
        <div className="modal-content">
          <h1 className="modal-title">{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
