import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";

const Exercises = () => (
  <Query
    query={gql`
      {
        exercise {
          id
          exerciseName
          targetMuscles
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

      return data.exercise.map(({ id, exerciseName, targetMuscles }: any) => (
        <div key={id}>
          {id} {exerciseName}: {targetMuscles}
        </div>
      ));
    }}
  </Query>
);

export default Exercises;
