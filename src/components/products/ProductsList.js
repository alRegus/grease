import React from "react";

import ProductsListItem from "./ProductsListItem";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductsList.module.scss";

export default function ProductsList() {
  const allProducts = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json"
  );

  const sortParam = useSelector((state) => state.sort.sortBy);
  const viewParam = useSelector((state) => state.view.view);
  const filterParams = useSelector((state) => state.filter);

  //!!console.log("lol".split(" ").some((el) => ["lol", "tol"].includes(el))) логика для массива с множеством элементов фильтрации;

  const filteredProducts = allProducts.filter((prod) => {
    return (
      (prod.categories === filterParams.categories ||
        filterParams.categories === "") &&
      (prod.brand
        .split(" ")
        .some((brand) => filterParams.brand.includes(brand)) ||
        filterParams.brand === "") &&
      (prod.type === filterParams.type || filterParams.type === "") &&
      (prod.name.toLowerCase().includes(filterParams.name.toLowerCase()) ||
        filterParams.name === "") &&
      (prod.used === filterParams.used || filterParams.used === false) &&
      (prod.deals === filterParams.deals || filterParams.deals === false)
    );
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
    />
  ));

  const gridView = viewParam === "grid" ? "grid" : "";
  return (
    <section className={(classes["products-list"], classes[`${gridView}`])}>
      {displayProductsList}
    </section>
  );
}
