import React, { Component, useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

import Form from "./Form";
import "./App.scss";

const client = new ApolloClient({
  credentials: "include",
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
            <Example />
            Env var: {process.env.GRAPHQL_SERVER_URL} & {process.env.NODE_ENV}
            <Lifts />
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

const Lifts = () => (
  <Query
    query={gql`
      {
        exercise {
          id
          exerciseName
          targetMuscles
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error !!</p>;

      return data.exercise.map(({ id, exerciseName, targetMuscles }: any) => (
        <div key={id}>
          <h2>
            {id} {exerciseName}:
          </h2>
          {/* {targetMuscles.map((muscle: any) => (
            <p key={muscle}>{muscle}</p> // TODO: Bad key
          ))} */}
          {targetMuscles}
        </div>
      ));
    }}
  </Query>
);

function Example() {
  type WorkingSet = {
    weight: string;
    systemOfMeasurement: string;
    reps: string;
    rpe: string;
  };

  const initialState: WorkingSet[] = [];
  const [workingSets, setWorkingSets] = useState(initialState);

  function onSubmit(
    weight: string,
    systemOfMeasurement: string,
    reps: string,
    rpe: string
  ) {
    setWorkingSets([
      ...workingSets,
      { weight, systemOfMeasurement, reps, rpe }
    ]);
  }

  const markup =
    workingSets.length == 0 ? (
      <Form onSubmit={onSubmit} />
    ) : (
      <>
        <Form onSubmit={onSubmit} />
        <div className="working-sets">
          {workingSets.map(({ weight, systemOfMeasurement, reps, rpe }, i) => (
            <div className="working-set" key={i}>
              <span className="working-set-index">Set {i + 1} </span>
              <span className="working-set-text working-set-weight">
                {weight}
                {parseFloat(weight) <= 1 && parseFloat(weight) > 0 ? (
                  <span className="unit">
                    {systemOfMeasurement.substring(
                      0,
                      systemOfMeasurement.length - 1
                    )}
                  </span>
                ) : (
                  <span className="unit">{systemOfMeasurement}</span>
                )}
              </span>
              {/* <span className="separator row-item-4"> X </span> */}
              <span className="working-set-text working-set-reps">
                {reps}
                {parseFloat(reps) <= 1 && parseFloat(reps) > 0 ? (
                  <span className="unit">rep</span>
                ) : (
                  <span className="unit">reps</span>
                )}
              </span>
              {/* <span className="separator row-item-7"> @ </span> */}
              <span className="working-set-text working-set-rpe">
                {rpe}
                <span className="unit">RPE</span>
              </span>
              <span className="working-set-icons">
                <i className="fas fa-edit edit-icon" />
                <i className="far fa-trash-alt delete-icon" />
              </span>
            </div>
          ))}
        </div>
      </>
    );

  return markup;
}

export default App;
