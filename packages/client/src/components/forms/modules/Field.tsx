import React from "react";
import { Input } from "../../inputs";
import { hasError, isDirty } from "../../inputs/modules";

const Field = (input: Input) => {
  return (
    <div className={"field " + (input.type === "checkbox" ? "checkbox" : "")}>
      <label className="field-label">{input.name.toUpperCase()}</label>
      <input
        className={
          "field-input " +
          (isDirty(input) ? "dirty " : "") +
          (hasError(input) ? "has-error " : "")
        }
        {...input}
        required={input.type === "checkbox" ? false : true}
      />
      <h4
        className={hasError(input) ? "error-message" : "error-messsage hidden"}
      >
        {input.error.replace(
          "this",
          input.name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(" ")
        )}
      </h4>
    </div>
  );
};

export default Field;
