import React from "react";
import { Mutation, Query } from "react-apollo";
import { DELETE_EXERCISE, READ_ALL_EXERCISES } from "./Schema";

const ExerciseList = () => (
  <Query query={READ_ALL_EXERCISES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      return data.exercise.map(({ id, exerciseName, targetMuscles }: any) => (
        // <Exercise
        //   id={id}
        //   exerciseName={exerciseName}
        //   targetMuscles={targetMuscles}
        //   hidden={false}
        // />
        <div key={id} id={id}>
          {id} {exerciseName}: {targetMuscles}
          <span className="working-set-icons">
            <i
              className="fas fa-edit edit-icon pointer"
              onClick={() => {
                // TODO: may be worth using a hook for stateful visibility
                const currentExercise = document.getElementById(id);
                if (currentExercise != null) {
                  console.log(currentExercise);
                  currentExercise.style.display = "none";
                }
              }}
            />
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

export default ExerciseList;
