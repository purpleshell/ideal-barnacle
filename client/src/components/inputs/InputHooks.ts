// All client facing hooks, until this file gets big enough to refactor.
// This file will allow component code to be much cleaner and concise,
// aswell as allowing for easier hook reuse and maintenance.

import { useState } from "react";
import { MixedSchema, string } from "yup";

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

const checkValidity = (
  schema: MixedSchema,
  value: any,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  schema
    .validate(value)
    .then(() => setError(""))
    .catch(reason => {
      setError(reason.errors[0]);
    });
};

export const useEmailInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  let schema = string()
    .email()
    .required();

  return {
    value,
    error,
    onChange: (e: any) => {
      setValue(e.target.value);
      checkValidity(schema, e.target.value, setError);
    },
    autoComplete: "email",
    type: "email",
    name: "email",
    placeholder: "Enter email"
  };
};

export const useUsernameInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  let schema = string()
    .max(20)
    .required();

  return {
    value,
    error,
    onChange: (e: any) => {
      setValue(e.target.value);
      checkValidity(schema, e.target.value, setError);
    },
    autoComplete: "username",
    type: "text",
    name: "username",
    placeholder: "Enter username"
  };
};

export const useNewPasswordInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  let schema = string()
    .min(6)
    .max(40);

  return {
    value,
    error,
    onChange: (e: any) => {
      setValue(e.target.value);
      checkValidity(schema, e.target.value, setError);
    },
    autoComplete: "new-password",
    type: "password",
    name: "password",
    placeholder: "Enter password"
  };
};

export const useCurrentPasswordInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  let schema = string()
    .min(6)
    .max(40);

  return {
    value,
    error,
    onChange: (e: any) => {
      setValue(e.target.value);
      checkValidity(schema, e.target.value, setError);
    },
    autoComplete: "current-password",
    type: "password",
    name: "password",
    placeholder: "Enter password"
  };
};
