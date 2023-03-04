import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore";
import Product from "./Product";
import "../scss/productList.scss";

export default function ProductList(): JSX.Element {
  const currentCategory = useSelector(
    (state: RootState) => state.currentCategory.currentCategory
  );

  const product = useSelector((state: RootState) => state.selectedCategory);
  const searchText = useSelector((state: RootState) => state.search.searchText);

  const filteredData = product.products.filter((item) => {
    return item.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="product-list">
        <h1>{currentCategory}</h1>
        <ul className="product-card">
        {filteredData.map((item) => (
          <Product item={item} />
        ))}
        </ul>
      </div>
    </>
  );
}
