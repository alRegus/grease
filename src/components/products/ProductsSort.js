import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import useWidth from "../../hooks/useWidth";

import classes from "./ProductsSort.module.scss";

export default function ProductsSort() {
  const productsQuantity = useHttp(
    `${process.env.REACT_APP_API}/productsArrayLength.json`
  );

  const windowWidth = useWidth();

  const viewParam = useSelector((state) => state.view.view);
  const filteredCount = useSelector((state) => state.count.count.count);
  const dispatch = useDispatch();

  const sortHandler = (e) => {
    const sortValue = e.target.value;

    dispatch({ type: "GET_SORT_BY", payload: sortValue });
  };

  const toggleViewHandler = (e) => {
    const elemClass = e.target.className;
    let viewToggle = "";
    if (elemClass === "fa-solid fa-list") {
      viewToggle = "list";
    }
    if (elemClass === "fa-solid fa-border-all") {
      viewToggle = "grid";
    }
    dispatch({ type: "VIEW_TOGGLE", payload: viewToggle });
  };

  if (windowWidth <= 801) {
    dispatch({ type: "VIEW_TOGGLE", payload: "list" });
  }

  const displayFilterMenuHandler = () => {
    dispatch({ type: "GET_DISPLAY_FILTER_MENU", payload: true });
    dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "hidden" } });
  };

  const listBgc =
    viewParam === "list" ? { backgroundColor: "#686868", color: "#fff" } : {};
  const gridBgc =
    viewParam === "grid" ? { backgroundColor: "#686868", color: "#fff" } : {};

  return (
    <section className={classes["products-sort"]}>
      <div className={classes["products-sort-select"]}>
        <label htmlFor="sort-select">Sort By:</label>
        <select name="instruments" id="sort-select" onChange={sortHandler}>
          <option value="popular-result">Popular Results</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="highest-rated">Highest Rated</option>
        </select>
      </div>

      {windowWidth > 801 && (
        <>
          <div className={classes["products-sort-quantity"]}>
            <p>
              {filteredCount} of {productsQuantity} items
            </p>
          </div>

          <div className={classes["products-sort-view"]}>
            <i
              style={listBgc}
              onClick={toggleViewHandler}
              className="fa-solid fa-list"
            ></i>
            <i
              style={gridBgc}
              onClick={toggleViewHandler}
              className="fa-solid fa-border-all"
            ></i>
          </div>
        </>
      )}
      {windowWidth <= 801 && (
        <>
          <span
            className={classes["refine"]}
            onClick={displayFilterMenuHandler}
          >
            Refine {filteredCount} Results
          </span>
        </>
      )}
    </section>
  );
}
