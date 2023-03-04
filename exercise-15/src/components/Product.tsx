import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/cartSlice";
import { AppDispatch } from "../redux/reduxStore";
import "../scss/product.scss";
type ProductType = {
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
};

type ProductProps = {
  item: ProductType;
};

export default function Product({ item }: ProductProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCartAction(item));
  };

  return (
    <>
      <div className="card">
        <div className="card-item">
        <img src={item.image} className="card-img" alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        <p>{item.price}</p>
        </div>
      <div className="cart-item-button">
      <button type="button" className="add-button" onClick={() => handleAddToCart()}>
        Add to Cart
      </button>
      </div>

      </div>
    </>
  );
}
