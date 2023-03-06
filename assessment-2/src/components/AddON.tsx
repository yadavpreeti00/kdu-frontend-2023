import React from "react";
import { useDispatch } from "react-redux";
import '../scss/AddOn.scss';
import { AppDispatch} from "../redux/reduxStore";

interface AddOn {
  name: string;
  cost: string;
  currency: string;
}

interface Props {
  addOns: AddOn[];

}

export default function AddON(props: Props): JSX.Element {

    const handleAddOnClick = () => {
       
      };
  return (
    <div className="add-on">
         <div className="heading">Select Additional add ons/preferences</div>
      <div className="select-add-on">
        {props.addOns.map((addOn) => (
          <button key={addOn.name} className="add-on-component" onClick={() => handleAddOnClick()}>
            {addOn.name}: {addOn.cost} {addOn.currency}
          </button>
        ))}
      </div>
    </div>
  );
}
