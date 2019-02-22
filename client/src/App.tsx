import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import CreateExerciseForm from "./components/CreateExerciseForm";
import Exercises from "./components/Exercises";
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
            <Sets />
            <CreateExerciseForm />
            <Exercises />
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
