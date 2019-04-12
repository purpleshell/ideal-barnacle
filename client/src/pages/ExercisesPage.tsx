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
        <span
          className="close-modal-button pointer right"
          onClick={() => {
            setShowCreateExerciseModal(!showCreateExerciseModal);
          }}
        >
          X
        </span>
        <CreateExerciseForm />
      </div>
      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
