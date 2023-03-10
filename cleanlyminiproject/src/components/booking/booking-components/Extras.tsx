import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExtra, setPrice } from "../../../redux/bookingSlice";
import { addExtrasPrice } from "../../../redux/priceSlice";
import { AppDispatch } from "../../../redux/reduxStore";
import { RootState } from "../../../redux/reduxStore";
import "../../../scss/Extras.scss";
import CalculateTotalPrice from "../../../utils/CalculatePrice";

interface ExtraType {
  id: number;
  type: string;
  price: number;
  image: string;
}

export default function Extras(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const extras = useSelector(
    (state: RootState) => state.extras.extras as ExtraType[]
  );
  const handleExtrasButton = (extra: ExtraType) => {
    dispatch(addExtra(extra.type));
    dispatch(addExtrasPrice(extra.price));
    dispatch(setPrice(CalculateTotalPrice()));
  };

  const selectedExtras = useSelector(
    (state: RootState) => state.booking.extras
  );

  return (
    <div className="extras-container">
      <div className="extras-heading">Need any extras?</div>
      <div className="extras-card-container">
        {extras.map((extra) => (
          <button
            className={`extras-card-item ${
              selectedExtras.includes(extra.type) ? "active" : ""
            }`}
            onClick={() => handleExtrasButton(extra)}
          >
            <img className="extras-card-image" src={extra.image} alt="Extras" />
            <div className="extras-card-text">{extra.type}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
