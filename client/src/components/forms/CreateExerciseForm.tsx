import { TargetMuscle } from "@overload/common";
import React, { useContext } from "react";
import {
  useCheckboxInput,
  useStringInput
} from "../../components/inputs/InputHooks";
import { ToggleModalContext } from "../../store/Context";
import { CREATE_EXERCISE, READ_ALL_EXERCISES } from "../Schema";
import MutationForm from "./MutationForm";

const CreateExerciseForm = () => {
  const targetMuscleInputArrayFromEnum = () => {
    const targetMuscleInputArray: {
      checked: boolean;
      value: string;
      error: string;
      type: string;
      onChange: () => void;
      name: string;
      placeholder: string;
    }[] = [];
    Object.values(TargetMuscle).map(muscle => {
      targetMuscleInputArray.push(useCheckboxInput(muscle));
    });
    console.log(
      "TargetMuscle Input Array: " + Object.values(targetMuscleInputArray[0])
    );
    return targetMuscleInputArray;
  };

  const targetMuscleInputArray = targetMuscleInputArrayFromEnum();

  const turnTargetMuscleValuesIntoArray = () => {
    const targetMuscles = targetMuscleInputArray;
    const valueArray: string[] = [];
    targetMuscles.map(muscle =>
      muscle.checked ? valueArray.push(muscle.value) : null
    );
    console.log("Value Array: " + valueArray);
    return valueArray;
  };

  const { ...exerciseName } = useStringInput("Exercise Name");
  const inputs = [exerciseName].concat(targetMuscleInputArray);
  const variables = {
    exerciseName: exerciseName.value,
    targetMuscles: turnTargetMuscleValuesIntoArray()
  };

  const { toggleCreateExerciseModal } = useContext(ToggleModalContext);

  return (
    <MutationForm
      mutation={CREATE_EXERCISE}
      refetchQueries={[{ query: READ_ALL_EXERCISES }]}
      variables={{ ...variables }}
      inputs={inputs}
      onCompleted={toggleCreateExerciseModal}
      ctaText="+ Add Exercise"
    />
  );
};

export default CreateExerciseForm;
