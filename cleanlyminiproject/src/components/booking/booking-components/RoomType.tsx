import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBathRoomCount, addBedRoomCount, setPrice, subtractBathRoomCount, subtractBedRoomCount } from "../../../redux/bookingSlice";
import { setBathRoomPrice, setBedRoomPrice } from "../../../redux/priceSlice";
import { RootState, AppDispatch } from "../../../redux/reduxStore";
import "../../../scss/RoomType.scss";
import CalculateTotalPrice from "../../../utils/CalculatePrice";

interface IRoomType {
  id: number;
  type: string;
  price: number;
  image: string;
}

export default function RoomType(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const roomTypes = useSelector(
    (state: RootState) => state.roomTypes.roomTypes as IRoomType[]
  );

  const bedRoomCount = useSelector(
    (state: RootState) => state.booking.bedRoomCount
  );
  const bathRoomCount = useSelector(
    (state: RootState) => state.booking.bathRoomCount
  );

  const handleQuantityAdd = (roomType: IRoomType) => {
    if (roomType.type === "BEDROOMS") {
      dispatch(addBedRoomCount(bedRoomCount + 1));
      dispatch(setBedRoomPrice((bedRoomCount + 1) * roomType.price));
    } else {
      dispatch(addBathRoomCount(bathRoomCount + 1));
      dispatch(setBedRoomPrice((bathRoomCount + 1) * roomType.price));
    }
    dispatch(setPrice(CalculateTotalPrice()));
  };
  const handleQuantitySubtract = (roomType: IRoomType) => {
    if (roomType.type === "BEDROOMS") {
      dispatch(subtractBedRoomCount(bedRoomCount === 0 ? 0 : bedRoomCount - 1))
      dispatch(setBedRoomPrice(bedRoomCount === 0 ? 0 : (bedRoomCount - 1)*roomType.price));
    } else {
      dispatch(subtractBathRoomCount(bathRoomCount === 0 ? 0 : bathRoomCount - 1));
      dispatch(setBathRoomPrice(bathRoomCount === 0 ? 0 : (bathRoomCount - 1)*roomType.price));
    }
    dispatch(setPrice(CalculateTotalPrice()));

    
  };

  console.log("cleaning type", roomTypes);

  return (
    <div className="room-type-container">
      <div className="room-type-heading">Tell us about your home</div>
      <div className="room-types">
        {roomTypes.map((roomType) => (
          <div key={roomType.id} className="room-type-card">
            <img
              className="card-image"
              src={roomType.image}
              alt="room-type"
            ></img>
            <div className="card-name">{roomType.type}</div>
            <div className="card-quantity">
              <button
                className="quantity-add"
                onClick={() => handleQuantityAdd(roomType)}
              >
                +
              </button>

              <div className="quantity-number">
                {roomType.type === "BEDROOMS" ? bedRoomCount : bathRoomCount}
              </div>

              <button
                className="quantity-subtract"
                onClick={() => handleQuantitySubtract(roomType)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
