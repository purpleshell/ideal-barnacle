import React from "react";

const Input = ({ input }: any) => {
  return (
    <input
      className={input.value.length > 0 ? "field-input dirty" : "field-input"}
      {...input}
    />
  );
};

export default Input;
