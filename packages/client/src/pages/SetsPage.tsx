import moment from "moment";
import React from "react";
import Sets from "../components/Sets";
import UserExerciseQueryPageWrapper from "./modules/UserExerciseQueryPageWrapper";

const SetsPage = ({ match }: any) => (
  <UserExerciseQueryPageWrapper
    match={match}
    render={(exercise: any) => (
      <>
        {/* // TODO make modal */}
        <a href="/date-picker">
          <div className="exercise-page-workout-date">
            {moment(match.params.date).format("ddd MMM Do YYYY")}
          </div>
        </a>
        {/* // TODO make modal */}
        <a href="/exercise-picker">
          <div className="exercise-page-name exercise-name">
            {exercise.exerciseName}
          </div>
        </a>
        <Sets date={match.params.date} exercise={exercise} />
      </>
    )}
  />
);

export default SetsPage;
