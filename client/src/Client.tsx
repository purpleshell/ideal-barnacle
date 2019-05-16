import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginUserForm from "./components/LoginUserForm";
import MobileNav from "./components/MobileNav";
import { AM_I_LOGGED_IN } from "./components/Schema";
import ExercisePage from "./pages/ExercisePage";
import ExercisesPage from "./pages/ExercisesPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";

const apolloclient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://overload-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
  credentials: "include"
});

const Client = () => {
  return (
    <>
      <ApolloProvider client={apolloclient}>
        <Query query={AM_I_LOGGED_IN}>
          {({ loading, error, data }) => {
            // while waiting for query response, render onboarding site
            if (loading) return <Site />;
            if (error) return <Site />;

            // if user is not logged in, render the marketing website
            if (data.me) {
              return <App />;
            }
            // if user is logged in, render the app
            return <Site />;
          }}
        </Query>
      </ApolloProvider>
    </>
  );
};

const Site = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginUserForm} />
    </Router>
  );
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <header>
          <MobileNav />
        </header>
        <main>
          <Route path="/" exact component={ProfilePage} />
          <Route exact path="/exercises/" component={ExercisesPage} />
          <Route path="/exercise/:id" component={ExercisePage} />
          <Route exact path="/profile/" component={ProfilePage} />
        </main>
      </Router>
    </div>
  );
};

export default Client;
