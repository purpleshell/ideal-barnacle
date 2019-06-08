import React, { useContext } from "react";
import {
  useCheckboxInput,
  useStringInput
} from "../../components/inputs/InputHooks";
import { ToggleModalContext } from "../../store/Context";
import { CREATE_EXERCISE, READ_ALL_EXERCISES } from "../Schema";
import MutationForm from "./MutationForm";

const CreateExerciseForm = () => {
  const { ...exerciseName } = useStringInput("Exercise Name");
  const { ...Quads } = useCheckboxInput("Quads");
  const { ...Traps } = useCheckboxInput("Traps");
  const { ...Biceps } = useCheckboxInput("Biceps");
  const { ...Triceps } = useCheckboxInput("Triceps");
  const { ...Lats } = useCheckboxInput("Lats");
  const { ...Delts } = useCheckboxInput("Delts");
  const inputs = [exerciseName, Quads, Traps, Biceps, Triceps, Lats, Delts];

  const turnTargetMuscleValuesIntoArray = () => {
    const targetMuscles = [Quads, Traps, Biceps, Triceps, Lats, Delts];
    const valueArray: any = [];
    targetMuscles.map(muscle =>
      muscle.checked ? valueArray.push(muscle.value) : null
    );
    return valueArray;
  };

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
      ctaText="Create Exercise"
    />
  );
};

export default CreateExerciseForm;
