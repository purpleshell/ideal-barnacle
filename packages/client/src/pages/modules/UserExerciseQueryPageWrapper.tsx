import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { READ_ALL_USER_EXERCISES } from "../../schema";

const UserExerciseQueryPageWrapper = ({ match, render }: any) => (
  <Query query={READ_ALL_USER_EXERCISES}>
    {({ loading, error, data }: any) => {
      // while waiting for query response, we want to render the loading component
      if (loading) return <LoadingPage />;
      if (error) return <ErrorPage />;

      // if user exercise exists, we want to render the sets page
      const exercise = data.userExercise.find((exercise: any) => {
        return exercise.exerciseName === match.params.exerciseName;
      });
      console.log(exercise);
      if (exercise) {
        return render(exercise);
      }

      // if user is not logged in, we want to render the onboarding site
      return <NoExercise />;
    }}
  </Query>
);

const LoadingPage = () => <h1>{"Loading..."}</h1>;

const ErrorPage = (error: any) => (
  <>
    <h1>{error}</h1>
    <Link to="/exercises">
      <button>{"Back to Exercises"}</button>
    </Link>
  </>
);

const NoExercise = () => (
  <>
    <h1>No exercise by that name</h1>
    <Link to="/exercises">
      <button>{"Back to Exercises"}</button>
    </Link>
  </>
);

export default UserExerciseQueryPageWrapper;
