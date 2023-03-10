import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { setPrice } from "../redux/bookingSlice";
import { RootState ,AppDispatch} from "../redux/reduxStore";



export default function CalculateTotalPrice(): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();

  const bathroomPrice = useSelector((state: RootState) => state.price.bathroomPrice);
  const bedRoomsPrice = useSelector((state: RootState) => state.price.bedRoomPrice);
  const extrasPrice = useSelector((state: RootState) => state.price.extrasPrice);
  const cleaningTypePrice = useSelector((state: RootState) => state.price.cleaningTypePrice);
  const hours = useSelector((state: RootState) => state.booking.hours);
  const totalPrice = bedRoomsPrice + bathroomPrice + extrasPrice + cleaningTypePrice + (hours*2);
   dispatch(setPrice(totalPrice));
  return (
    <>
    {totalPrice===0?"":`${totalPrice}`}
    </>
  );
}
