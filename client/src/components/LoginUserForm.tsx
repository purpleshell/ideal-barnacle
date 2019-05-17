import React from "react";
import { Mutation } from "react-apollo";
import { useInputWithReset } from "./Hooks";
import { AM_I_LOGGED_IN, LOGIN_USER } from "./Schema";

const LoginUserForm = () => {
  const { setValue: setEmailField, ...emailField } = useInputWithReset("");
  const { setValue: setPasswordField, ...passwordField } = useInputWithReset(
    ""
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
            <h1>Log in to Overload</h1>
            <div className="field">
              <label className="field-label" htmlFor="exercise-name">
                Email:
              </label>
              <input
                type="text"
                className="exercise-input"
                placeholder="Enter email"
                {...emailField}
              />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="target-muscles">
                Password:
              </label>
              <input
                type="text"
                className="exercise-input"
                placeholder="Enter password"
                {...passwordField}
              />
            </div>
            <h4>Forgot your password?</h4>
            <button type="submit">Login</button>
            <h4 className="subtext">
              Don't have an account? Start your free trial.
            </h4>
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
