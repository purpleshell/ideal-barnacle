import React from "react";
import Sets from "../components/Sets";

const ExercisePage = ({ match }: any) => {
  return (
    // TODO: Write better composition of componenets more akin to ExercisesPage
    <>
      <a href="/date-picker">
        <div className="exercise-page-workout-date">{"Feb 14"}</div>
      </a>
      <a href="/exercise-picker">
        <div className="exercise-page-name exercise-name">
          {match.params.id}
        </div>
      </a>
      <Sets />
    </>
  );
};

export default ExercisePage;
