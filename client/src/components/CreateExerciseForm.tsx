import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React, { useState } from "react";

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
      <Mutation mutation={CREATE_EXERCISE}>
        {(createExercise, data) => (
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
              console.log(data);
              // exerciseName.setValue("");
              // targetMuscles.setValue("");
            }}
          >
            <input type="text" id="exercise-name-input" {...exerciseName} />
            <input type="text" id="target-muscles-input" {...targetMuscles} />

            <button type="submit">+ Add Exercise</button>
          </form>
        )}
      </Mutation>
    );
  };

export default CreateExerciseForm;
