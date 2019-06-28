import React from "react";
import { Query } from "react-apollo";
import { READ_ALL_USER_EXERCISES } from "../api/Schema";
import Exercise from "./Exercise";

const ExerciseList = () => (
  <Query query={READ_ALL_USER_EXERCISES}>
    {({ loading, error, data }: any) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;
      console.log(JSON.stringify(data));
      // Sort query data by the objects' exerciseName field, ascending
      const exercises = data.userExercise.sort(
        (exercise1: any, exercise2: any) =>
          exercise1.exerciseName.localeCompare(exercise2.exerciseName)
      );

      return exercises.map(({ id, exerciseName, targetMuscles }: any) => (
        <Exercise
          key={id}
          exerciseName={exerciseName}
          targetMuscles={targetMuscles}
        />
      ));
    }}
  </Query>
);

export default ExerciseList;
