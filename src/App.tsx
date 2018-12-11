import React, { Component, useState } from "react";
import Form from "./Form";
import "./App.css";
import { string } from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />
        </header>
      </div>
    );
  }
}

function Example() {
  type WorkingSet = {
    weight: string;
    unit: string;
    reps: string;
    rpe: string;
  };

  const initialState: WorkingSet[] = [];
  const [workingSets, setWorkingSets] = useState(initialState);

  function onSubmit(weight: string, unit: string, reps: string, rpe: string) {
    setWorkingSets([...workingSets, { weight, unit, reps, rpe }]);
  }

  const markup =
    workingSets.length == 0 ? (
      <Form onSubmit={onSubmit} />
    ) : (
      <>
        <Form onSubmit={onSubmit} />
        <div className="working-sets">
          {workingSets.map(({ weight, unit, reps, rpe }, i) => (
            <div className="working-set" key={i}>
              <span className="working-set-index">Set {i + 1} </span>
              <span className="working-set-text working-set-weight">
                {weight}
                {parseFloat(weight) <= 1 && parseFloat(weight) > 0 ? (
                  <span className="unit">
                    {unit.substring(0, unit.length - 1)}
                  </span>
                ) : (
                  <span className="unit">{unit}</span>
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
