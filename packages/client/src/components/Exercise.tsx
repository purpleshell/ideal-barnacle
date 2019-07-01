import React, { useState } from "react";
import { Mutation, MutationFn, OperationVariables } from "react-apollo";
import { Link } from "react-router-dom";
import { useInput } from "../components/inputs/InputHooks";
import {
  DELETE_EXERCISE,
  READ_ALL_USER_EXERCISES,
  UPDATE_EXERCISE
} from "../schema";

interface ExerciseProps {
  exerciseId: string;
  exerciseName: any;
  targetMuscles: string[];
}
// BUG: After updating a record on the dev server the ui does
// not reflect the changes consistently.
const Exercise = ({ exerciseName, targetMuscles }: ExerciseProps) => {
  const [isUserUpdatingThisEntity, setIsUserUpdatingThisEntity] = useState(
    false
  );
  const updateExerciseNameInput = useInput(exerciseName);
  const updateTargetMusclesInput = useInput(targetMuscles.join(" "));

  const markup = isUserUpdatingThisEntity ? (
    <Mutation
      mutation={UPDATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_USER_EXERCISES }]}
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
      <span className="target-muscles">
        {targetMuscles.map((targetMuscle, i) => (
          <span key={i} className="target-muscle">
            {targetMuscle.replace(/_+/g, " ")}
          </span>
        ))}
      </span>
      <span className="working-set-icons">
        <svg
          className="edit-icon pointer"
          onClick={() => {
            setIsUserUpdatingThisEntity(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
        </svg>
        <Mutation
          mutation={DELETE_EXERCISE}
          refetchQueries={[{ query: READ_ALL_USER_EXERCISES }]}
        >
          {(
            deleteExercise: MutationFn<any, OperationVariables>,
            { error }: any
          ) => (
            <>
              <svg
                className="delete-icon pointer"
                onClick={() =>
                  deleteExercise({
                    variables: { exerciseName: exerciseName }
                  })
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>

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
