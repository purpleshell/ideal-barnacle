import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <ApolloProvider client={apolloclient}>
      <Query query={AM_I_LOGGED_IN}>
        {({ loading, error, data }: any) => {
          // while waiting for query response, we want to render the onboarding site
          if (loading) return <Site />;
          if (error) return <Site />;

          // if user is logged in, we want to render the app
          if (data.me) {
            return <App />;
          }
          // if user is not logged in, we want to render the onboarding site
          return <Site />;
        }}
      </Query>
    </ApolloProvider>
  );
};

const Site = () => {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
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
