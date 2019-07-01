import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import UserExerciseQueryPageWrapper from "./modules/UserExerciseQueryPageWrapper";

const ExercisePage = ({ match }: any) => (
  <UserExerciseQueryPageWrapper
    match={match}
    render={(exercise: any) => (
      <>
        <a href="/exercise-picker">
          <div className="exercise-page-name exercise-name">
            {match.params.exerciseName}
          </div>
        </a>
        <Link
          to={
            `/exercise/${exercise.exerciseName}/` +
            moment()
              .format()
              .substring(0, 10)
          }
        >
          <button>Start Session</button>
        </Link>
        <h3>Graphs and stats coming soon</h3>
      </>
    )}
  />
);

export default ExercisePage;
