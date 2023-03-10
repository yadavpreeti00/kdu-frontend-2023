import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCleaningFrequency } from "../../../redux/bookingSlice";
import { AppDispatch } from "../../../redux/reduxStore";

import { RootState } from "../../../redux/reduxStore";
import "../../../scss/CleaningFrequency.scss";

interface ICleaningFrequency {
  id: number;
  type: string;
}

export default function CleaningFrequency(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const selectedCleaningFrequency = useSelector(
    (state: RootState) => state.booking.cleaningFrequency
  );

  const cleaningFrequencies = useSelector(
    (state: RootState) =>
      state.cleaningFrequencies.cleaningFrequencies as ICleaningFrequency[]
  );
  const handleCleaningFrequencyButton = (
    cleaningFrequency: ICleaningFrequency
  ) => {
    dispatch(setCleaningFrequency(cleaningFrequency.type));
  };

  return (
    <div className="cleaning-frequency-container">
      <div className="cleaning-frequency-heading">
        How often would you like cleaning?
      </div>

      <div className="cleaning-frequency">
        {cleaningFrequencies.map((cleaningFrequency) => (
          <button
            type="button"
            className={`cleaning-frequency-button ${
              cleaningFrequency.type === selectedCleaningFrequency
                ? "active"
                : ""
            }`}
            onClick={() => handleCleaningFrequencyButton(cleaningFrequency)}
          >
            {cleaningFrequency.type}
          </button>
        ))}
      </div>
    </div>
  );
}
