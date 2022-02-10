import React from "react";
import { useDispatch } from "react-redux";

export default function ProductsSort() {
  const dispatch = useDispatch();
  const sortHandler = (e) => {
    const sortValue = e.target.value;

    dispatch({ type: "GET_SORT_BY", payload: sortValue });
  };

  return (
    <div>
      <div className="products-sort">
        <label htmlFor="sort-select">Sort By:</label>

        <select name="instruments" id="sort-select" onChange={sortHandler}>
          <option value="popular-result">Popular Results</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="highest-rated">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}
