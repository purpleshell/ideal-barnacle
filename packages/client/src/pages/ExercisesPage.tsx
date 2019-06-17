import React, { useState } from "react";
import ExerciseList from "../components/ExerciseList";
import CreateExerciseModal from "../components/modals/CreateExerciseModal";
import { ToggleModalContext } from "../store/Context";

const ExercisesPage = () => {
  const [showCreateExerciseModal, setShowCreateExerciseModal] = useState(false);

  const toggleCreateExerciseModal = () => {
    setShowCreateExerciseModal(
      showCreateExerciseModal => !showCreateExerciseModal
    );
  };
  return (
    <>
      <h1 className="page-title">Your Exercises</h1>
      <button
        className="add-exercise-button"
        onClick={toggleCreateExerciseModal}
      >
        + Add Exercise
      </button>
      <ToggleModalContext.Provider value={{ toggleCreateExerciseModal }}>
        {showCreateExerciseModal ? <CreateExerciseModal /> : null}
      </ToggleModalContext.Provider>

      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
