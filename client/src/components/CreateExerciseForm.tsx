import gql from "graphql-tag";
import React, { useState } from "react";
import { Mutation } from "react-apollo";

const READ_ALL_EXERCISES = gql`
  {
    exercise {
      id
      exerciseName
      targetMuscles
    }
  }
`;

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: any) => setValue(e.target.value)
  };
};

const CreateExerciseForm = () =>
  //     onSubmit: {
  //   onSubmit: ((exerciseName: string, targetMuscles: string) => void);
  // }
  {
    const exerciseName = useInputValue("");
    const targetMuscles = useInputValue("");

    const CREATE_EXERCISE = gql`
      mutation CreateExercise($exerciseName: String!, $targetMuscles: String!) {
        createExercise(
          exerciseName: $exerciseName
          targetMuscles: $targetMuscles
        ) {
          exerciseName
          targetMuscles
        }
      }
    `;

    return (
      <Mutation
        mutation={CREATE_EXERCISE}
        // update={(cache, { data: { createExercise } }) => {
        //   console.log(createExercise);
        //   const data: any = cache.readQuery({
        //     query: READ_ALL_EXERCISES
        //   });
        //   console.log(data);
        //   data.exercise.push(createExercise);
        //   cache.writeQuery({
        //     query: READ_ALL_EXERCISES,
        //     data
        //   });
        // }}
        refetchQueries={[{ query: READ_ALL_EXERCISES }]}
      >
        {(createExercise, { error }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              // onSubmit.onSubmit(exerciseName.value, targetMuscles.value);
              createExercise({
                variables: {
                  exerciseName: exerciseName.value,
                  targetMuscles: targetMuscles.value
                }
              });
              // exerciseName.setValue("");
              // targetMuscles.setValue("");
            }}
          >
            <div className="field">
              <label className="field-label" htmlFor="exercise-name">
                Exercise Name:
              </label>
              <input type="text" className="exercise-input" {...exerciseName} />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="target-muscles">
                Target Muscles:
              </label>

              <input
                type="text"
                className="exercise-input"
                {...targetMuscles}
              />
            </div>

            <button type="submit">+ Add Exercise</button>

            {error ? <p>{error.message}</p> : <></>}
          </form>
        )}
      </Mutation>
    );
  };

export default CreateExerciseForm;
