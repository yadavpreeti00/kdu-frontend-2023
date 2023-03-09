import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCleaningType, setPrice } from "../../../redux/bookingSlice";
import { setCleaningTypePrice } from "../../../redux/priceSlice";
import { AppDispatch } from "../../../redux/reduxStore";
import { RootState } from "../../../redux/reduxStore";
import "../../../scss/CleaningType.scss";
import CalculateTotalPrice from "../../../utils/CalculatePrice";

interface ICleaningType {
  id: number;
  type: string;
  rate: number;
}

export default function CleaningType(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const cleaningTypes = useSelector(
    (state: RootState) => state.cleaningTypes.cleaningTypes as ICleaningType[]
  );

  const selectedCleaningType = useSelector(
    (state: RootState) => state.booking.cleaningType
  );

  const handleCleaningTypeButton = (cleaningType: ICleaningType) => {
    dispatch(setCleaningType(cleaningType.type));
    dispatch(setCleaningTypePrice(cleaningType.rate));
    dispatch(setPrice(CalculateTotalPrice()));
  };

  return (
    <div className="cleaning-types-container">
      <div className="cleaning-types-heading">What type of cleaning?</div>
      <div className="cleaning-type">
        {cleaningTypes.map((cleaningType) => (
          <button
            type="button"
            className={`cleaning-type-button ${
              cleaningType.type === selectedCleaningType ? "active" : ""
            }`}
            onClick={() => handleCleaningTypeButton(cleaningType)}
          >
            {cleaningType.type}
          </button>
        ))}
      </div>
    </div>
  );
}
