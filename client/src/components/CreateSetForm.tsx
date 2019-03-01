import React from "react";
import { useInput } from "./Hooks";

const CreateSetForm = (onSubmit: {
  onSubmit: (
    weight: string,
    systemOfMeasurement: string,
    reps: string,
    rpe: string
  ) => void;
}) => {
  const weight = useInput("0");
  const systemOfMeasurement = useInput("lbs");
  const reps = useInput("1");
  const rpe = useInput("8");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit.onSubmit(
          weight.value,
          systemOfMeasurement.value,
          reps.value,
          rpe.value
        );
      }}
    >
      <div className="weight-field field">
        <label className="field-label" htmlFor="weight">
          Weight:
        </label>
        <input type="text" id="weight" {...weight} />
        <select
          name="systemOfMeasurement"
          id="systemOfMeasurement"
          {...systemOfMeasurement}
        >
          <option value="lbs">lbs</option>
          <option value="kgs">kgs</option>
        </select>
      </div>
      <div className="reps-field field">
        <label className="field-label" htmlFor="reps">
          Reps:
        </label>
        <input type="text" id="reps" {...reps} />
      </div>
      <div className="rpe-field field">
        <label className="field-label" htmlFor="rpe">
          RPE:
        </label>
        <select name="rpe" id="rpe" {...rpe}>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">&#10877;5</option>
        </select>
      </div>
      <button>+ Add Set</button>
    </form>
  );
};

export default CreateSetForm;
