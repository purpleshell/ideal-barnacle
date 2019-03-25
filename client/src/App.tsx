import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import CreateExerciseForm from "./components/CreateExerciseForm";
import ExerciseList from "./components/ExerciseList";
import Sets from "./components/Sets";

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
            <nav className="hidden">
              <ul className="li">
                <a href="/">Home</a>
              </ul>
              <ul className="li">
                <a href="/exercises">Exercises</a>
              </ul>
              <ul className="li">
                <a href="/workouts">Workouts</a>
              </ul>
              <ul className="li">
                <a href="/profile">Profile</a>
              </ul>
              <ul className="li">
                <a href="/graphs">Graphs</a>
              </ul>
            </nav>
            <Sets />
            <CreateExerciseForm />
            <ExerciseList />
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
