import React from "react";
import { Query } from "react-apollo";
import Exercise from "./Exercise";
import { READ_ALL_EXERCISES } from "./Schema";

const ExerciseList = () => (
  <Query query={READ_ALL_EXERCISES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      // Sort query data by the objects' exerciseName field, ascending
      const exercises = data.exercise.sort((exercise1: any, exercise2: any) =>
        exercise1.exerciseName.localeCompare(exercise2.exerciseName)
      );

      return exercises.map(({ id, exerciseName, targetMuscles }: any) => (
        <Exercise
          key={id}
          exerciseName={exerciseName}
          targetMuscles={targetMuscles}
          hidden={false}
        />
      ));
    }}
  </Query>
);

export default ExerciseList;
