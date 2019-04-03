import React from "react";
import CreateExerciseForm from "../components/CreateExerciseForm";
import ExerciseList from "../components/ExerciseList";

const ExercisesPage = () => {
  return (
    <>
      <CreateExerciseForm />
      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
