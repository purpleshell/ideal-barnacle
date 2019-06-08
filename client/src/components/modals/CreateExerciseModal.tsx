import React, { useContext } from "react";
import { ToggleModalContext } from "../../store/Context";
import CreateExerciseForm from "../forms/CreateExerciseFormRENAMEME";
import Modal from "./Modal";

const CreateExerciseModal = () => {
  const { toggleCreateExerciseModal } = useContext(ToggleModalContext);
  return (
    <Modal title="Custom Exercise" toggleModal={toggleCreateExerciseModal}>
      <CreateExerciseForm />
    </Modal>
  );
};

export default CreateExerciseModal;
