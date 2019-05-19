import React from "react";
import { Mutation } from "react-apollo";
import { useInputWithReset } from "../Hooks";
import { AM_I_LOGGED_IN, LOGIN_USER } from "../Schema";

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
            <div className="fields">
              <div className="field">
                <label className="field-label" htmlFor="exercise-name">
                  Email:
                </label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="Enter email"
                  {...emailField}
                />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="target-muscles">
                  Password:
                </label>
                <input
                  type="password"
                  className="field-input"
                  placeholder="Enter password"
                  {...passwordField}
                />
              </div>
              <h4 className="input-subtext primary pointer">
                Forgot your password?
              </h4>
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
