import gql from "graphql-tag";

export const CREATE_EXERCISE = gql`
  mutation CreateExercise($createExerciseInput: CreateExerciseInput!) {
    createExercise(createExerciseInput: $createExerciseInput) {
      exerciseName
      targetMuscles
    }
  }
`;

export const READ_ALL_USER_EXERCISES = gql`
  {
    userExercise {
      id
      exerciseName
      targetMuscles
      sets {
        id
        weight
        systemOfMeasurement
        reps
        rpe
        date
      }
    }
  }
`;

export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise(
    $exerciseName: String!
    $newExerciseName: String!
    $newTargetMuscles: [TargetMuscle!]!
  ) {
    updateExercise(
      exerciseName: $exerciseName
      newExerciseName: $newExerciseName
      newTargetMuscles: $newTargetMuscles
    )
  }
`;

export const DELETE_EXERCISE = gql`
  mutation DeleteExercise($exerciseName: String!) {
    deleteExercise(exerciseName: $exerciseName)
  }
`;
