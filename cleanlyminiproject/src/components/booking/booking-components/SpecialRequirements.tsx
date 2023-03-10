import React from "react";
import "../../../scss/SpecialRequirements.scss";

export default function SpecialRequirements(): JSX.Element {
  return (
    <div className="special-requirements-container">
      <div className="special-requirements-heading">
        Do you have any special requirements{" "}
        <span className="optional">(optional)</span>
      </div>
      <input type="text" className="special-requirements-text" />
    </div>
  );
}
