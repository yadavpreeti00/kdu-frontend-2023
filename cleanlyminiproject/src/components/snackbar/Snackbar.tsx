import React, { useEffect, useState } from "react";
import "../../scss/Snackbar.scss";

interface SnackbarProps {
    status: string;
  }

export default function Snackbar(props:SnackbarProps) {
  const [showSnackbar, setShowSnackbar] = useState(false);



  useEffect(() => {
    if (props.status) {
      setShowSnackbar(true);
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [props.status]);

  if (showSnackbar) {
    return (
      <div className={`snackbar ${props.status}`}>
        {props.status === "success"
          ? "Data Loaded Successfully !!!"
          : "Sorry Cannot Load Data !!!"}
      </div>
    );
  }
  return null;
}