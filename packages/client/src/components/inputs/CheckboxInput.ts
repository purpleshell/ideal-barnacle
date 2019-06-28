import { useState } from "react";

export interface CheckboxInput {
  checked: boolean;
  value: string;
  error: string;
  type: string;
  onChange: () => void;
  name: string;
  placeholder: string;
}

export const useCheckboxInput: (name: string) => CheckboxInput = (
  name: string
) => {
  const [checked, setChecked] = useState(false);

  return {
    checked: checked,
    value: name,
    error: "",
    type: "checkbox",
    onChange: () => {
      setChecked(!checked);
    },
    name: name.replace(/_+/g, " "), // format label string
    placeholder: ""
  };
};
