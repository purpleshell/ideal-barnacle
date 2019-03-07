// All client facing hooks, until this file gets big enough to refactor.
// This file will allow component code to be much cleaner and concise,
// aswell as allowing for easier hook reuse and maintenance.

import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: any) => setValue(e.target.value)
  };
};

export const useInputWithReset = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: any) => setValue(e.target.value),
    setValue: (newValue: string) => setValue(newValue)
  };
};
