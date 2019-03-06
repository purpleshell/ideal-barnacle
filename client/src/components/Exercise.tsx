import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { useInput } from "./Hooks";
import { DELETE_EXERCISE, READ_ALL_EXERCISES, UPDATE_EXERCISE } from "./Schema";

const Exercise = ({ id, exerciseName, targetMuscles }: any) => {
  const [hidden, setHidden] = useState(false);
  const updateExerciseNameInput = useInput(exerciseName);
  const updateTargetMusclesInput = useInput(targetMuscles);

  const markup = hidden ? (
    <Mutation
      mutation={UPDATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_EXERCISES }]}
      onCompleted={() => {
        setHidden(false);
      }}
    >
      {(updateExercise, { error }) => (
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
              setHidden(false);
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
    <div key={id} id={id}>
      {id} {exerciseName}: {targetMuscles}
      <span className="working-set-icons">
        <i
          className="fas fa-edit edit-icon pointer"
          onClick={() => {
            // TODO: may be worth optimizing for stateful visibility
            setHidden(true);
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
