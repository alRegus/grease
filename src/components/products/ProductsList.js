import React from "react";

import ProductsListItem from "./ProductsListItem";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";

export default function ProductsList() {
  const allProducts = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json"
  );

  const filterParams = useSelector((state) => state.filter);

  const filteredProducts = allProducts.filter((prod) => {
    return (
      (prod.categories === filterParams.categories ||
        filterParams.categories === "") &&
      (prod.brand === filterParams.brand || filterParams.brand === "") &&
      (prod.type === filterParams.type || filterParams.type === "") &&
      (prod.name === filterParams.name || filterParams.name === "") &&
      (prod.used === filterParams.used || filterParams.used === false) &&
      (prod.deals === filterParams.deals || filterParams.deals === false)
    );
  });

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
  return <section>{displayProductsList}lol</section>;
}
