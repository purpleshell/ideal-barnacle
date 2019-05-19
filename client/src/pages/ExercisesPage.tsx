import React, { useState } from "react";
import CreateExerciseForm from "../components/CreateExerciseForm";
import ExerciseList from "../components/ExerciseList";
import { ReactComponent as CloseIcon } from "../images/icons/close.svg";

const ExercisesPage = () => {
  const [showCreateExerciseModal, setShowCreateExerciseModal] = useState(false);

  return (
    <>
      <h1 className="page-title">Your Exercises</h1>
      <button
        className="add-exercise-button"
        onClick={() => setShowCreateExerciseModal(!showCreateExerciseModal)}
      >
        + Add Exercise
      </button>
      <div
        className={!showCreateExerciseModal ? "backdrop hidden" : "backdrop"}
        onClick={() => {
          setShowCreateExerciseModal(!showCreateExerciseModal);
        }}
      />
      <div
        className={
          !showCreateExerciseModal ? "modal center" : "modal center open"
        }
      >
        {/* // TODO cause CreateExerciseForm to close parent modal on submit */}

        <CloseIcon
          className="close-modal-button pointer right"
          onClick={() => {
            setShowCreateExerciseModal(!showCreateExerciseModal);
          }}
        />
        <CreateExerciseForm />
      </div>
      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
