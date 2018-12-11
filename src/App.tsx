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
        <div className="working-sets">
          {workingSets.map(({ weight, unit, reps, rpe }, i) => (
            <div className="working-set" key={i}>
              <span className="working-set-index row-item-1">Set {i + 1} </span>
              <span className="working-set-text row-item-2">{weight}</span>
              <span className="unit row-item-3">{unit}</span>
              <span className="separator row-item-4"> X </span>
              <span className="working-set-text row-item-5">{reps}</span>
              <span className="unit row-item-6">reps</span>
              <span className="separator row-item-7"> @ </span>
              <span className="unit row-item-8">RPE:</span>
              <span className="working-set-text row-item-9">{rpe}</span>
              <i className="fas fa-edit row-item-11" />
              <i className="far fa-trash-alt row-item-12" />
            </div>
          ))}
        </div>
        <Form onSubmit={onSubmit} />
      </>
    );

  return markup;
}

export default App;
