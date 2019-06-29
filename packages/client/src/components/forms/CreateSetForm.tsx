import React from "react";
import { useInput } from "../inputs";

const CreateSetForm = (onSubmit: {
  onSubmit: (
    weight: string,
    systemOfMeasurement: string,
    reps: string,
    rpe: string
  ) => void;
}) => {
  const weight = useInput("0");
  const systemOfMeasurement = useInput("lbs");
  const reps = useInput("1");
  const rpe = useInput("8");

  return (
    <form
      className="create-set-form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit.onSubmit(
          weight.value,
          systemOfMeasurement.value,
          reps.value,
          rpe.value
        );
      }}
    >
      <div className="weight-field field">
        <label className="field-label" htmlFor="weight">
          Weight:
          <select
            name="systemOfMeasurement"
            id="systemOfMeasurement"
            {...systemOfMeasurement}
          >
            <option value="lbs">lbs</option>
            <option value="kgs">kgs</option>
          </select>
        </label>
        <input type="text" id="weight" {...weight} />
      </div>
      <div className="reps-field field">
        <label className="field-label" htmlFor="reps">
          Reps:
        </label>
        <input type="text" id="reps" {...reps} />
      </div>
      <div className="rpe-field field">
        <label className="field-label" htmlFor="rpe">
          RPE:
        </label>
        <input type="text" id="rpe" {...rpe} />
      </div>
      <div className="create-set-form-buttons">
        <button>+ Add Set</button>
        <svg
          className="pointer add-timer"
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M20 1.33333H12V3.99999H20V1.33333ZM14.6667 18.6667H17.3333V10.6667H14.6667V18.6667ZM25.3733 9.85333L27.2667 7.95999C26.6933 7.27999 26.0667 6.64 25.3867 6.08L23.4933 7.97333C21.4267 6.31999 18.8267 5.33333 16 5.33333C9.37333 5.33333 4 10.7067 4 17.3333C4 23.96 9.36 29.3333 16 29.3333C22.64 29.3333 28 23.96 28 17.3333C28 14.5067 27.0133 11.9067 25.3733 9.85333ZM16 26.6667C10.84 26.6667 6.66667 22.4933 6.66667 17.3333C6.66667 12.1733 10.84 8 16 8C21.16 8 25.3333 12.1733 25.3333 17.3333C25.3333 22.4933 21.16 26.6667 16 26.6667Z"
              fill="#545F75"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-4"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="pointer add-note"
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M18.6668 2.66667H8.00016C6.5335 2.66667 5.34683 3.86667 5.34683 5.33334L5.3335 26.6667C5.3335 28.1333 6.52016 29.3333 7.98683 29.3333H24.0002C25.4668 29.3333 26.6668 28.1333 26.6668 26.6667V10.6667L18.6668 2.66667ZM21.3335 21.3333H17.3335V25.3333H14.6668V21.3333H10.6668V18.6667H14.6668V14.6667H17.3335V18.6667H21.3335V21.3333ZM17.3335 12V4.66667L24.6668 12H17.3335Z"
              fill="#545F75"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-4"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </form>
  );
};

export default CreateSetForm;
