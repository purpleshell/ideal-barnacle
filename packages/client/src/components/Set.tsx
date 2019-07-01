import React from "react";

const Set = ({ i, set }: any) => {
  return (
    <div className="working-set">
      <span className="working-set-text working-set-index">Set {i + 1} </span>
      <span className="working-set-text working-set-weight">
        {set.weight}
        {parseFloat(set.weight) <= 1 && parseFloat(set.weight) > 0 ? (
          <span className="unit">
            {set.systemOfMeasurement.substring(
              0,
              set.systemOfMeasurement.length - 1
            )}
          </span>
        ) : (
          <span className="unit">{set.systemOfMeasurement}</span>
        )}
      </span>
      {/* <span className="separator row-item-4"> X </span> */}
      <span className="working-set-text working-set-reps">
        {set.reps}
        {parseFloat(set.reps) <= 1 && parseFloat(set.reps) > 0 ? (
          <span className="unit">rep</span>
        ) : (
          <span className="unit">reps</span>
        )}
      </span>
      {/* <span className="separator row-item-7"> @ </span> */}
      <span className="working-set-text working-set-rpe">
        {set.rpe}
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
  );
};

export default Set;
