import React from "react";
import { Query } from "react-apollo";
import { AM_I_LOGGED_IN } from "../api/Schema";

const LoggedInIndicator = () => (
  <Query query={AM_I_LOGGED_IN}>
    {({ loading, error, data }: any) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      var username = "Unauthorized User";

      if (data.me) {
        username = data.me.username;
      }

      var hourOfDay = new Date().getHours();
      var greeting = "morning";
      if (hourOfDay >= 12 && hourOfDay < 18) {
        greeting = "afternoon";
      } else if (hourOfDay >= 18 || hourOfDay < 4) {
        greeting = "evening";
      }

      return (
        <>
          <h1>
            Good {greeting} {username}
          </h1>
        </>
      );
    }}
  </Query>
);

export default LoggedInIndicator;
