import React from "react";
import { Query } from "react-apollo";
import Exercise from "./Exercise";
import { READ_ALL_EXERCISES } from "./Schema";

const ExerciseList = () => (
  <Query query={READ_ALL_EXERCISES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      return data.exercise.map(({ id, exerciseName, targetMuscles }: any) => (
        <Exercise
          key={id}
          id={id}
          exerciseName={exerciseName}
          targetMuscles={targetMuscles}
          hidden={false}
        />
      ));
    }}
  </Query>
);

export default ExerciseList;
