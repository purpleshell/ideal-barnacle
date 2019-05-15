import React from "react";
import { Mutation } from "react-apollo";
import { useInputWithReset } from "./Hooks";
import { AM_I_LOGGED_IN, LOGIN_USER } from "./Schema";

const LoginUserForm = () => {
  const { setValue: setEmailField, ...emailField } = useInputWithReset(
    "sue@sue.me"
  );
  const { setValue: setPasswordField, ...passwordField } = useInputWithReset(
    "sue"
  );

  return (
    <>
      <Mutation
        mutation={LOGIN_USER}
        refetchQueries={[{ query: AM_I_LOGGED_IN }]}
      >
        {(loginUser, { error }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              loginUser({
                variables: {
                  email: emailField.value,
                  password: passwordField.value
                }
              });
              setEmailField("");
              setPasswordField("");
            }}
          >
            <div className="field">
              <label className="field-label" htmlFor="exercise-name">
                Email:
              </label>
              <input type="text" className="exercise-input" {...emailField} />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="target-muscles">
                Password:
              </label>
              <input
                type="text"
                className="exercise-input"
                {...passwordField}
              />
            </div>
            <button type="submit">Login</button>
            {/* // TODO: implement elegant user facing error messages */}
            {error ? (
              <div className="error-message">{error.message}</div>
            ) : (
              <></>
            )}
          </form>
        )}
      </Mutation>
    </>
  );
};

export default LoginUserForm;
