import { TargetMuscle } from "@ideal-barnacle/common";
import React, { useContext } from "react";
import {
  useCheckboxInput,
  useStringInput
} from "../../components/inputs/InputHooks";
import { ToggleModalContext } from "../../store/Context";
import { CREATE_EXERCISE, READ_ALL_USER_EXERCISES } from "../Schema";
import MutationForm from "./MutationForm";

const CreateExerciseForm = () => {
  const targetMuscleInputsFromEnum = () => {
    const targetMuscleInputs: {
      checked: boolean;
      value: string;
      error: string;
      type: string;
      onChange: () => void;
      name: string;
      placeholder: string;
    }[] = [];
    Object.values(TargetMuscle).map(muscle => {
      targetMuscleInputs.push(useCheckboxInput(muscle));
    });
    // console.log(
    //   "TargetMuscle Input Array: " + Object.values(targetMuscleInputs[0])
    // );
    return targetMuscleInputs;
  };

  const targetMuscleInputs = targetMuscleInputsFromEnum();

  const targetMuscleValuesFromInputs = () => {
    const values: string[] = [];
    targetMuscleInputs.map(targetMuscleInput =>
      targetMuscleInput.checked ? values.push(targetMuscleInput.value) : null
    );
    // console.log("Value Array: " + values);
    return values;
  };

  const { ...exerciseName } = useStringInput("Exercise Name");
  const inputs = [exerciseName].concat(targetMuscleInputs);
  const createExerciseInput = {
    exerciseName: exerciseName.value,
    targetMuscles: targetMuscleValuesFromInputs()
  };

  const { toggleCreateExerciseModal } = useContext(ToggleModalContext);

  return (
    <MutationForm
      mutation={CREATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_USER_EXERCISES }]}
      variables={{ createExerciseInput }}
      inputs={inputs}
      onCompleted={toggleCreateExerciseModal}
      ctaText="+ Add Exercise"
    />
  );
};

export default CreateExerciseForm;
