import React from "react";
import CreateExerciseForm from "../components/CreateExerciseForm";
import ExerciseList from "../components/ExerciseList";

const ExercisesPage = () => {
  return (
    <>
      <h1 className="page-title">Your Exercises</h1>
      <CreateExerciseForm />
      <ExerciseList />
    </>
  );
};

export default ExercisesPage;
