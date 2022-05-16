import React from "react";

import ProductsListItem from "./ProductsListItem";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductsList.module.scss";

export default function ProductsList() {
  const allProducts = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json"
  );
  const dispatch = useDispatch();

  const sortParam = useSelector((state) => state.sort.sortBy);
  const viewParam = useSelector((state) => state.view.view);
  const filterParams = useSelector((state) => state.filter);
  console.log(filterParams); //2 раза, может решить??
  //!!console.log("lol".split(" ").some((el) => ["lol", "tol"].includes(el))) логика для массива с множеством элементов фильтрации;

  const filteredProducts = allProducts.filter((prod) => {
    return (
      (prod.categories === filterParams.categories ||
        filterParams.categories === "") &&
      (prod.brand
        .split(" ")
        .some((brand) => filterParams.brand.includes(brand)) ||
        filterParams.brand.length === 0) &&
      (prod.type.split("  ").some((type) => filterParams.type.includes(type)) ||
        filterParams.type.length === 0) &&
      (prod.name.toLowerCase().includes(filterParams.name.toLowerCase()) ||
        filterParams.name === "") &&
      (prod.used === filterParams.used || filterParams.used === false) &&
      (prod.deals === filterParams.deals || filterParams.deals === false) &&
      (prod.price >= filterParams.priceRange[0] ||
        filterParams.priceRange.length === 0) &&
      (prod.price <= filterParams.priceRange[1] ||
        filterParams.priceRange.length === 0) &&
      (prod.totalVotesValue / prod.votes >= filterParams.rating[0] ||
        filterParams.rating.length === 0) &&
      (prod.totalVotesValue / prod.votes <= filterParams.rating[1] ||
        filterParams.rating.length === 0) &&
      (prod.discount >= filterParams.discount[0] ||
        filterParams.discount.length === 0) &&
      (prod.discount <= filterParams.discount[1] ||
        filterParams.discount.length === 0)
    );
  });

  dispatch({
    type: "GET_FILTERED_QUANTITY",
    payload: { count: filteredProducts.length },
  });

  if (sortParam === "low-to-high")
    filteredProducts.sort((a, b) => a.price - b.price);
  if (sortParam === "high-to-low")
    filteredProducts.sort((a, b) => b.price - a.price);
  if (sortParam === "popular-result")
    filteredProducts.sort((a, b) => b.votes - a.votes);
  if (sortParam === "highest-rated")
    filteredProducts.sort(
      (a, b) => b.totalVotesValue / b.votes - a.totalVotesValue / a.votes
    );

  const displayProductsList = filteredProducts.map((instrument) => (
    <ProductsListItem
      name={instrument.name}
      totalVotesValue={instrument.totalVotesValue}
      price={instrument.price}
      votesQuantity={instrument.votes}
      key={instrument.id}
      imgURL={instrument.productImgUrl}
      prodId={instrument.id}
    />
  ));

  /*   console.log(displayProductsList.length); */

  const gridView = viewParam === "grid" ? "grid" : "";
  return (
    <section className={(classes["products-list"], classes[`${gridView}`])}>
      {displayProductsList}
    </section>
  );
}
