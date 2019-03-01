import React, { useState } from "react";
import CreateSetForm from "./CreateSetForm";

function Sets() {
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
      <CreateSetForm onSubmit={onSubmit} />
    ) : (
      <>
        <CreateSetForm onSubmit={onSubmit} />
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
                <i className="fas fa-edit edit-icon pointer" />
                <i className="far fa-trash-alt delete-icon pointer" />
              </span>
            </div>
          ))}
        </div>
      </>
    );

  return markup;
}

export default Sets;
