import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ExercisePage from "./pages/ExercisePage";
import ExercisesPage from "./pages/ExercisesPage";
import LandingPage from "./pages/LandingPage";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://overload-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApolloProvider client={client}>
            <Router>
              <nav className="exercise-page-nav">
                <div>
                  <Link to="/exercises" className="parent-screen-link">
                    {"<- Back to Exercises"}
                  </Link>
                  <svg
                    className="right menu-toggle"
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {}}
                  >
                    <path
                      d="M0 0H18V2H0V0ZM0 6H18V8H0V6ZM0 12H18V14H0V12Z"
                      fill="#545f75"
                    />
                  </svg>
                </div>

                <div className="menu hidden">
                  <ul className="li">
                    <Link to="/">Home</Link>
                  </ul>
                  <ul className="li">
                    <Link to="/exercises">Exercises</Link>
                  </ul>
                  <ul className="li">
                    <Link to="/workouts">Workouts</Link>
                  </ul>
                  <ul className="li">
                    <Link to="/profile">Profile</Link>
                  </ul>
                  <ul className="li">
                    <Link to="/graphs">Graphs</Link>
                  </ul>
                </div>
              </nav>
              <Route path="/" exact component={LandingPage} />
              <Route exact path="/exercises/" component={ExercisesPage} />
              <Route path="/exercise/:id" component={ExercisePage} />
            </Router>
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
