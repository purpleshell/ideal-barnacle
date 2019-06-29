import * as React from "react";
import { Mutation, MutationFn, OperationVariables } from "react-apollo";
import { useInput } from "../components/inputs/InputHooks";
import { READ_ALL_USER_EXERCISES, UPDATE_EXERCISE } from "../schema";

const UpdateExerciseForm = (props: any) => {
  const exerciseName = useInput(props.exerciseName);
  const targetMuscles = useInput(props.targetMuscles);

  return (
    <Mutation
      mutation={UPDATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_USER_EXERCISES }]}
    >
      {(
        updateExercise: MutationFn<any, OperationVariables>,
        { error }: any
      ) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            updateExercise({
              variables: {
                exerciseName: props.exerciseName,
                newExerciseName: exerciseName.value,
                newTargetMuscles: targetMuscles.value
              }
            });
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
          <button type="submit">+ Update Exercise</button>
          {/* // TODO: implement elegant user facing error messages */}
          {error ? <div className="error-message">{error.message}</div> : <></>}
        </form>
      )}
    </Mutation>
  );
};

export default UpdateExerciseForm;
