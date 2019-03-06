import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { DELETE_EXERCISE, READ_ALL_EXERCISES } from "./Schema";

const Exercise = ({ id, exerciseName, targetMuscles }: any) => {
  const [hidden, setHidden] = useState(false);
  hidden ? (
    <></>
  ) : (
    <div key={id} id={id}>
      {id} {exerciseName}: {targetMuscles}
      <span className="working-set-icons">
        <i
          className="fas fa-edit edit-icon pointer"
          onClick={() => {
            // TODO: may be worth optimizing for stateful visibility
            setHidden(true);
            console.log(hidden);
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
};

export default Exercise;
