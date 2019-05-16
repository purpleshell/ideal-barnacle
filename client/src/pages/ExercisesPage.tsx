import React, { useState } from "react";
import CreateExerciseForm from "../components/CreateExerciseForm";
import ExerciseList from "../components/ExerciseList";

const ExercisesPage = () => {
  const [showCreateExerciseModal, setShowCreateExerciseModal] = useState(false);

  return (
    <>
      <h1 className="page-title">Your Exercises</h1>
      {/* <CreateExerciseForm /> */}
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

        <svg
          className="close-modal-button pointer right"
          onClick={() => {
            setShowCreateExerciseModal(!showCreateExerciseModal);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
        <CreateExerciseForm />
      </div>
      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
