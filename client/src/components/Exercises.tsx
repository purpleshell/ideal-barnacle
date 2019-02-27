import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

const READ_ALL_EXERCISES = gql`
  {
    exercise {
      id
      exerciseName
      targetMuscles
    }
  }
`;

const Exercises = () => (
  <Query query={READ_ALL_EXERCISES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error)
        return (
          <p>
            {error} ${error.message}
          </p>
        );

      return data.exercise.map(({ id, exerciseName, targetMuscles }: any) => (
        <div key={id}>
          {id} {exerciseName}: {targetMuscles}
        </div>
      ));
    }}
  </Query>
);

export default Exercises;
