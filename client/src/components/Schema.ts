import { gql } from "apollo-boost";

// All client-facing graphql queries/mutations
export const CREATE_EXERCISE = gql`
  mutation CreateExercise(
    $exerciseName: String!
    $targetMuscles: [TargetMuscle!]!
  ) {
    createExercise(exerciseName: $exerciseName, targetMuscles: $targetMuscles) {
      exerciseName
      targetMuscles
    }
  }
`;

export const READ_ALL_EXERCISES = gql`
  {
    exercise {
      id
      exerciseName
      targetMuscles
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

export const REGISTER_USER = gql`
  mutation RegisterUser($userRegistrationInfo: UserRegistrationInfo!) {
    registerUser(userRegistrationInfo: $userRegistrationInfo) {
      id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($userLoginInfo: UserLoginInfo!) {
    loginUser(userLoginInfo: $userLoginInfo) {
      id
      email
    }
  }
`;

export const AM_I_LOGGED_IN = gql`
  {
    me {
      id
      username
      email
    }
  }
`;
