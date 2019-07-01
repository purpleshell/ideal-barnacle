import gql from "graphql-tag";

export const CREATE_SET = gql`
  mutation CreateSet($createSetInput: CreateSetInput!) {
    createSet(createSetInput: $createSetInput) {
      id
      warmUp
      weight
      systemOfMeasurement
      reps
      rpe
      date
      order
    }
  }
`;

export const READ_ALL_USER_SETS = gql`
  {
    userSet {
      id
      exerciseName
      warmUp
      weight
      sustemOfMeasurement
      reps
      rpe
      date
      order
    }
  }
`;

export const UPDATE_SET = gql`
  mutation UpdateSet($updateSetInput: UpdateSetInput!) {
    updateSet(updateSetInput: $updateSetInput)
  }
`;

export const DELETE_SET = gql`
  mutation DeleteSet($id: String!) {
    deleteSet(id: $id)
  }
`;
