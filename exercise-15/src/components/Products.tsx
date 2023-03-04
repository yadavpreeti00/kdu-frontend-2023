import React from "react";
import { useEffect } from "react";
import { AppDispatch } from "../redux/reduxStore";
import { useDispatch } from "react-redux";
import { fetchAllCategoriesProducts } from "../redux/categoryProductsSlice";
import { fetchCategoryProduct } from "../redux/selectedCategorySlice";
import { RootState } from "../redux/reduxStore";
import { useSelector } from "react-redux";
import AllProductsList from "./AllProductsList";
import ProductList from "./ProductList";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const currentCategory = useSelector(
    (state: RootState) => state.currentCategory.currentCategory
  );
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    if (currentCategory === "allCategories") {
      dispatch(fetchAllCategoriesProducts(categories));
    } else {
      dispatch(fetchCategoryProduct(currentCategory));
    }
  }, [currentCategory, categories, dispatch]);

  return (
    <div>
      {currentCategory === "allCategories" ? (
        <AllProductsList />
      ) : (
        <ProductList />
      )}
    </div>
  );
}
