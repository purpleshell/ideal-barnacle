import React, { useState } from "react";
import { Mutation, MutationFn, OperationVariables } from "react-apollo";
import { Link } from "react-router-dom";
import { useInput } from "../components/inputs/InputHooks";
import { DELETE_EXERCISE, READ_ALL_EXERCISES, UPDATE_EXERCISE } from "./Schema";

// BUG: After updating a record on the dev server the ui does
// not reflect the changes consistently.
const Exercise = ({ exerciseName, targetMuscles }: any) => {
  const [isUserUpdatingThisEntity, setIsUserUpdatingThisEntity] = useState(
    false
  );
  const updateExerciseNameInput = useInput(exerciseName);
  const updateTargetMusclesInput = useInput(targetMuscles);

  const markup = isUserUpdatingThisEntity ? (
    <Mutation
      mutation={UPDATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_EXERCISES }]}
      onCompleted={() => {
        // attempted bugfix using setState to re-render
        setIsUserUpdatingThisEntity(false);
      }}
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
                exerciseName: exerciseName,
                newExerciseName: updateExerciseNameInput.value,
                newTargetMuscles: updateTargetMusclesInput.value
              }
            });
          }}
        >
          <div className="field">
            <label className="field-label" htmlFor="exercise-name">
              Exercise Name:
            </label>
            <input
              type="text"
              className="exercise-input"
              {...updateExerciseNameInput}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="target-muscles">
              Target Muscles:
            </label>
            <input
              type="text"
              className="exercise-input"
              {...updateTargetMusclesInput}
            />
          </div>
          <button type="submit">+ Update Exercise</button>
          <button
            onClick={() => {
              setIsUserUpdatingThisEntity(false);
            }}
          >
            Cancel
          </button>
          {/* // TODO: implement elegant user facing error messages */}
          {error ? <div className="error-message">{error.message}</div> : <></>}
        </form>
      )}
    </Mutation>
  ) : (
    <div>
      <Link to={`/exercise/${exerciseName}`} className="exercise-name">
        {exerciseName}
      </Link>
      {targetMuscles}
      <span className="working-set-icons">
        <i
          className="fas fa-edit edit-icon pointer"
          onClick={() => {
            setIsUserUpdatingThisEntity(true);
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
  );
  return markup;
};

export default Exercise;
