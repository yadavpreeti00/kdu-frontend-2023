import React, { useState, useEffect } from "react";
import "./snackbar.scss";

export default function Snackbar(props) {
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
