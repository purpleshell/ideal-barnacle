import React from "react";
import { Link } from "react-router-dom";

const ExercisePage = ({ match }: any) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return (
    <>
      {/* // TODO make modal */}
      <a href="/exercise-picker">
        <div className="exercise-page-name exercise-name">
          {match.params.id}
        </div>
      </a>
      <Link to={`/exercise/${match.params.id}/${yyyy}-${mm}-${dd}`}>
        <button>Start Session</button>
      </Link>
      <h3>Graphs and stats coming soon</h3>
    </>
  );
};

export default ExercisePage;
