import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import Product from "./Product";
import "../scss/allProducts.scss";

export default function AllProductsList(): JSX.Element {
  const allProducts = useSelector(
    (state: RootState) => state.categoryProducts.products
  );

  const searchText = useSelector((state: RootState) => state.search.searchText);

  return (
    <div className="product-list">
      {allProducts.map((product) => (
        <div key={product.categoryName}>
          <h1>{product.categoryName}</h1>

          <div className="product-list-items">
            {product.Items.filter((item) => {
              return item.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            }).map((item) => (
              <Product item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
