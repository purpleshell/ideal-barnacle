import React, { useState } from "react";
import CreateSetForm from "./CreateSetForm";

const Sets = () => {
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
                <svg
                  className="edit-icon pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                </svg>
                <svg
                  className="delete-icon pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </>
    );

  return markup;
};

export default Sets;
