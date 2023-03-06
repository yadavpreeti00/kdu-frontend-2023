import React from 'react';
import './App.css';
import { fetchRooms } from './redux/roomSlice';
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/reduxStore";
import { useEffect } from "react";
import Booking from './components/Booking';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="App">
      <Booking/>
    </div>
  );
}

export default App;
