import { MixedSchema } from "yup";
import { Input } from "..";

export const checkValidity = (
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

export const hasError = (input: Input) => {
  return input.error.length > 0;
};
export const isDirty = (input: Input) => {
  if (input.type === "checkbox") {
    return false;
  } else {
    return input.value.length > 0;
  }
};
