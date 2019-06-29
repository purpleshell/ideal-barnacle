import { TargetMuscle } from "@ideal-barnacle/common";
import React, { useContext } from "react";
import { CREATE_EXERCISE, READ_ALL_USER_EXERCISES } from "../../schema";
import { ToggleModalContext } from "../../store/Context";
import { CheckboxInput, useCheckboxInput, useStringInput } from "../inputs";
import MutationForm from "./MutationForm";

const CreateExerciseForm = () => {
  const targetMuscleInputsFromEnum = () => {
    const targetMuscleInputs: CheckboxInput[] = [];
    Object.values(TargetMuscle).map((muscle: string) => {
      targetMuscleInputs.push(useCheckboxInput(muscle));
    });
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
