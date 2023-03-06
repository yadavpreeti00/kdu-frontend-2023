import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import '../scss/RoomType.scss';
import { useState } from "react";
import AddOn from "./AddON";


interface IRoomType{
    id: number;
    name: string;
    pricePerNight: string;
    currency: string;
    addOns: AddOn[];
  
  }
  interface AddOn {
    name: string;
    cost: string;
    currency: string;
  }


export default function RoomType(): JSX.Element {
  const roomTypes = useSelector((state: RootState) => state.rooms.roomTypes);
  const [selectedRoomType, setSelectedRoomType] = useState<IRoomType>(); // add state for selected room type


  const handleRoomTypeClick = (roomType: IRoomType) => {
    setSelectedRoomType(roomType);
  };

  return (
    <div className="room-type-container">
      <div className="heading">Select Room Type</div>
      <div className="select-room-container">
        {roomTypes.map((roomType) => (
            <div className="room-type">
          <button className="room-type-button" onClick={() => handleRoomTypeClick(roomType)}>{roomType.name}</button>
          </div>
        ))}
      </div>
      {selectedRoomType && selectedRoomType.addOns && selectedRoomType.addOns.length > 0 && (
        <AddOn addOns={selectedRoomType.addOns} />
      )}
     

      
    </div>
  );
}
