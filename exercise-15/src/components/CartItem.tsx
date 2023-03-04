import { addToCartAction, removeFromCartAction } from '../redux/cartSlice';
import { useDispatch } from "react-redux";
import { AppDispatch} from "../redux/reduxStore";
import '../scss/cartItem.scss';

type ProductType = {
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type ProductProps = {
  item: ProductType;
};

export default function CartItem({ item }: ProductProps): JSX.Element {

  const dispatch = useDispatch<AppDispatch>();

  const handleAddButton = () => {
    dispatch(addToCartAction(item));

  };
  const handleRemoveButton = () => {
    dispatch(removeFromCartAction(item.id));
  }
  return (
    <>
    <div className="cart-item">
      <div className="card-item-product">
        <img src={item.image} alt={item.name} className="card-img"/>
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        <p>{item.price}</p>
        
        <p>Quantity : {item.quantity}</p>
        </div>
        <div className="cart-item-buttons">
          <button type="button" className="cart-btn" onClick={() => handleAddButton()}>+</button>
          <button type="button" className="cart-btn" onClick={() => handleRemoveButton()}>-</button>
        </div>
      
      </div>
    </>
  );
}
