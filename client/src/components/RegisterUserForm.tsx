import React from "react";
import { Mutation } from "react-apollo";
import { useInputWithReset } from "./Hooks";
import { AM_I_LOGGED_IN, REGISTER_USER } from "./Schema";

const RegisterUserForm = () => {
  const { setValue: setEmailField, ...emailField } = useInputWithReset(
    "sue@sue.me"
  );
  const { setValue: setUsernameField, ...usernameField } = useInputWithReset(
    "sue"
  );
  const { setValue: setPasswordField, ...passwordField } = useInputWithReset(
    "sueme"
  );

  return (
    <>
      <Mutation
        mutation={REGISTER_USER}
        refetchQueries={[{ query: AM_I_LOGGED_IN }]}
      >
        {(registerUser, { error }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              registerUser({
                variables: {
                  userRegistrationInfo: {
                    username: usernameField.value,
                    email: emailField.value,
                    password: passwordField.value
                  }
                }
              });
              setEmailField("");
              setPasswordField("");
              setUsernameField("");
            }}
          >
            <div className="field">
              <label className="field-label" htmlFor="exercise-name">
                Username:
              </label>
              <input
                type="text"
                className="exercise-input"
                {...usernameField}
              />
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
            <button type="submit">Register</button>
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

export default RegisterUserForm;
