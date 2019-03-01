import gql from "graphql-tag";
import React from "react";
import { Mutation, Query } from "react-apollo";
import { DELETE_EXERCISE } from "./Schema";

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
          <span className="working-set-icons">
            <i className="fas fa-edit edit-icon pointer" />
            <Mutation
              mutation={DELETE_EXERCISE}
              refetchQueries={[{ query: READ_ALL_EXERCISES }]}
            >
              {(deleteExercise, { error }) => (
                <>
                  <i
                    className="far fa-trash-alt delete-icon pointer"
                    onClick={() =>
                      deleteExercise({
                        variables: { exerciseName: exerciseName }
                      })
                    }
                  />
                  {error ? <p>{error.message}</p> : <></>}
                </>
              )}
            </Mutation>
          </span>
        </div>
      ));
    }}
  </Query>
);

export default Exercises;
