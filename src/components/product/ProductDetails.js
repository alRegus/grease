import React from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

export default function ProductDetails() {
  const param = useParams();

  const product = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json/1.json"
  );
  console.log(product);

  return <div>ProductDetails</div>;
}
