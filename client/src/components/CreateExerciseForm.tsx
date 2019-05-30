import React from "react";
import { Mutation, MutationFn, OperationVariables } from "react-apollo";
import { useInputWithReset } from "../components/inputs/InputHooks";
import { CREATE_EXERCISE, READ_ALL_EXERCISES } from "./Schema";

const CreateExerciseForm = () => {
  const { setValue: resetName, ...exerciseName } = useInputWithReset("");
  const { setValue: resetMuscles, ...targetMuscles } = useInputWithReset("");

  return (
    <>
      <h2 className="modal-title">Custom Exercise</h2>
      <Mutation
        mutation={CREATE_EXERCISE}
        refetchQueries={[{ query: READ_ALL_EXERCISES }]}
      >
        {(createExercise: MutationFn<any, OperationVariables>, { error }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              createExercise({
                variables: {
                  exerciseName: exerciseName.value,
                  targetMuscles: targetMuscles.value
                }
              });
              resetName("");
              resetMuscles("");
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
            {/* // TODO: implement elegant user facing error messages */}
            {error ? (
              <div className="error-message">{error.message}</div>
            ) : (
              <></>
            )}
          </form>
        )}
      </Mutation>
    </>
  );
};

export default CreateExerciseForm;
