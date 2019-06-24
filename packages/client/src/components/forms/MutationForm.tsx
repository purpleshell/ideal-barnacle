import { DocumentNode } from "apollo-boost";
import React, { useState } from "react";
import {
  Mutation,
  MutationFn,
  MutationOpts,
  OperationVariables
} from "react-apollo";

type Input = {
  name: string;
  value: string;
  onChange: (e: any) => void;
  type: string;
  error: string;
};

type Inputs = Input[];

interface MutationFormProps extends MutationOpts {
  mutation: DocumentNode;
  inputs: Inputs;
  ctaText: string;
}

enum MutationStatus {
  UNREQUESTED = "UNREQUESTED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS"
}

const MutationForm: React.FC<MutationFormProps> = ({
  mutation,
  refetchQueries,
  variables,
  inputs,
  onCompleted,
  ctaText
}) => {
  const [mutationStatus, setMutationStatus] = useState(
    MutationStatus.UNREQUESTED
  );

  return (
    <Mutation
      mutation={mutation}
      refetchQueries={refetchQueries}
      onCompleted={() => {
        setMutationStatus(MutationStatus.SUCCESS);
        onCompleted;
      }}
      onError={() => {
        setMutationStatus(MutationStatus.ERROR);
      }}
    >
      {(
        mutationFunction: MutationFn<any, OperationVariables>,
        { error }: any
      ) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            mutationFunction({
              variables
            });
            setMutationStatus(MutationStatus.LOADING);
          }}
        >
          <div className="fields">
            {inputs.map((input, i) => {
              const hasError = () => {
                return input.error.length > 0;
              };
              const isDirty = () => {
                if (input.type === "checkbox") {
                  return false;
                } else {
                  return input.value.length > 0;
                }
              };
              return (
                <div
                  key={i}
                  className={
                    "field " + (input.type === "checkbox" ? "checkbox" : "")
                  }
                >
                  <label className="field-label">
                    {input.name.toUpperCase()}
                  </label>
                  <input
                    className={
                      "field-input " +
                      (isDirty() ? "dirty " : "") +
                      (hasError() ? "has-error " : "")
                    }
                    {...input}
                    required={input.type === "checkbox" ? false : true}
                  />
                  <h4
                    className={
                      hasError ? "error-message" : "error-messsage hidden"
                    }
                  >
                    {input.error.replace(
                      "this",
                      input.name
                        .split(" ")
                        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                        .join(" ")
                    )}
                  </h4>
                </div>
              );
            })}
          </div>
          {mutationStatus === MutationStatus.SUCCESS ||
          mutationStatus === MutationStatus.LOADING ? (
            <button>{mutationStatus}</button>
          ) : (
            <button type="submit">{ctaText}</button>
          )}
          {error ? (
            error.graphQLErrors.map((error: any, i: any) => (
              <div className="error-message" key={i}>
                {error.message}
              </div>
            ))
          ) : (
            <></>
          )}
        </form>
      )}
    </Mutation>
  );
};

export default MutationForm;
