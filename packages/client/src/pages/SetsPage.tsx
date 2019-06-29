import moment from "moment";
import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Sets from "../components/Sets";
import { READ_ALL_USER_EXERCISES } from "../schema";

const SetsPage = ({ match }: any) => {
  return (
    <Query query={READ_ALL_USER_EXERCISES}>
      {({ loading, error, data }: any) => {
        // while waiting for query response, we want to render the loading component
        if (loading) return <LoadingPage />;
        if (error) return <ErrorPage />;

        // if user exercise exists, we want to render the sets page
        if (
          data.userExercise.find((exercise: any) => {
            return exercise.exerciseName === match.params.exerciseName;
          })
        ) {
          return (
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
                  {match.params.exerciseName}
                </div>
              </a>
              <Sets />
            </>
          );
        }
        // if user is not logged in, we want to render the onboarding site
        return <NoExercise />;
      }}
    </Query>
  );
};

const LoadingPage = () => <h1>{"Loading..."}</h1>;

const ErrorPage = (error: any) => (
  <>
    <h1>{error}</h1>
    <Link to="/exercises">
      <button>{"<- Go Back"}</button>
    </Link>
  </>
);

const NoExercise = () => (
  <>
    <h1>No exercise by that name</h1>
    <Link to="/exercises">
      <button>{"Go Back"}</button>
    </Link>
  </>
);

export default SetsPage;
