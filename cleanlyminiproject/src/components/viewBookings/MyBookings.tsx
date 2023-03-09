import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../Header";
import { useEffect } from "react";
import { getBookingData } from "../../redux/getDataFromDB/getBookingSlice";
import { AuthEventData } from "@aws-amplify/ui";
import '../../scss/MyBookings.scss';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const columns: GridColDef[] = [
  { field: "id", headerName: "Booking ID", flex: 1,minWidth:200 },
  { field: "cleaningType", headerName: "Cleaning Type", flex: 1,minWidth:200  },
  { field: "date", headerName: "Date", width: 150 ,minWidth:150 },
  { field: "price", headerName: "Bill Amount $", flex: 1 ,minWidth:150 },
  { field: "address", headerName: "Address", flex: 1 ,minWidth:200 },
];

type Props = {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
};

export default function MyBookings({ signOut }: Props): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchData() {
      dispatch(getBookingData());
    }
    fetchData();
  }, []);

  const myBookings = useSelector(
    (state: RootState) => state.getBookedData.bookedData
  );
  const rows = myBookings?.map((booking: any, index) => ({
    id: booking.booking_id,
    cleaningType: booking.booking_data.cleaningType,
    date: booking.booking_data.date,
    price: booking.booking_data.price,
    address: booking.booking_data.personalDetails.address,
  }));

  console.log("rows", rows);
  return (
    <div>
      <div className="my-bookings">
        <Header />
        <div className="table">
          <DataGrid
            rows={rows}
            columns={columns}
            style={{ height: 500, width: "100%" }}
          />
        </div>
        <div className="sign-out-btn-container">
        <Button
                onClick={signOut}
                className="sign-out-btn"
                endIcon={<SendIcon />}
              >
                SignOut
              </Button>
        </div>
      </div>
      
    </div>
  );
}
