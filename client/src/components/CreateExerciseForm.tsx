import React from "react";
import { Mutation } from "react-apollo";
import { useInputWithReset } from "./Hooks";
import { CREATE_EXERCISE, READ_ALL_EXERCISES } from "./Schema";

const CreateExerciseForm = () => {
  const exerciseName = useInputWithReset("");
  const targetMuscles = useInputWithReset("");

  return (
    <Mutation
      mutation={CREATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_EXERCISES }]}
    >
      {(createExercise, { error }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            createExercise({
              variables: {
                exerciseName: exerciseName.value,
                targetMuscles: targetMuscles.value
              }
            });
            exerciseName.resetValue();
            targetMuscles.resetValue();
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
            <input type="text" className="exercise-input" {...targetMuscles} />
          </div>
          <button type="submit">+ Add Exercise</button>
          {/* TODO: implement elegant user facing error messages*/}
          {error ? <p>{error.message}</p> : <></>}
        </form>
      )}
    </Mutation>
  );
};

export default CreateExerciseForm;
