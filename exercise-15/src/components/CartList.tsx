import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch} from "../redux/reduxStore";
import CartItem from "./CartItem";
import "../scss/cartList.scss";
import { Link } from "react-router-dom";
import { clearCartAction } from "../redux/cartSlice";

export default function CartList(): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart.products);

  const dispatch = useDispatch<AppDispatch>();

  const handleCheckout = () => {
    dispatch(clearCartAction());

  };
  return (
    <>
      <div className="header">
        <div className="heading">Cart</div>
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>
        
        <button className="checkout-button" onClick={() => handleCheckout()}>Checkout</button>
      </div>
      <div className="cart">
        <ul className="product-card">
          {cart.map((item) => (
            <CartItem item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
