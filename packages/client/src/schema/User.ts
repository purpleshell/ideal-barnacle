import gql from "graphql-tag";

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
