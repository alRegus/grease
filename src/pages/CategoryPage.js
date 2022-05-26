import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../hooks/useHttp";
import { Link } from "react-router-dom";

import classes from "./CategoryPage.module.scss";
import SliderComponent from "../components/SliderComponent";
import CategoriesDescriptionDrums from "../components/categories/CategoriesDescriptionDrums";
import CategoriesDescriptionGuitars from "../components/categories/CategoriesDescriptionGuitars";
import CategoriesDescriptionPianos from "../components/categories/CategoriesDescriptionPianos";

export default function CategoryPage() {
  const categoryRoute = useSelector((state) => state.categoryRoute.route);

  const dispatch = useDispatch();

  const instrumentTypes = useHttp(`${process.env.REACT_APP_API}/types.json`);

  const instrumentBrands = useHttp(`${process.env.REACT_APP_API}/brands.json`);

  const categoryInstrumentTypes = instrumentTypes.filter((type) =>
    type.typeName.includes(categoryRoute)
  );

  const typesHandler = (e) => {
    const typeValue = e.target.closest("div").lastElementChild.textContent;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [typeValue],
        used: false,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const displayCategoryTypes = categoryInstrumentTypes.map((type) => (
    <Link to="/products-list" key={type.typeName}>
      <div onClick={typesHandler}>
        <img
          src={`https://i.ibb.co/${type.typeImgCode}/${type.typeName}.jpg`}
          alt={type.typeName}
        />
        <p>
          {type.typeName
            .split("-")
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.substring(1);
            })
            .join(" ")}
        </p>
      </div>
    </Link>
  ));

  const categoryBrands = instrumentBrands.filter((brand) =>
    brand.categoryAssociation.includes(categoryRoute)
  );

  const brandHandler = (e) => {
    const brandValue = e.target.alt;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories:
          categoryRoute.charAt(0).toUpperCase() + categoryRoute.substring(1),
        type: [],
        used: false,
        deals: false,
        brand: [brandValue],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const displayCategoryBrands = categoryBrands.map((brand) => (
    <div onClick={brandHandler} key={brand.brandName}>
      <Link to="/products-list">
        <img src={brand.brandImgUrl} alt={brand.brandName} />
      </Link>
    </div>
  ));

  let categoryImgCode;

  switch (categoryRoute) {
    case "pianos":
      categoryImgCode = "KLTy1jJ";
      break;
    case "guitars":
      categoryImgCode = "ykkVPnc";
      break;
    case "drums":
      categoryImgCode = "Gx9j0nT";
      break;
    default:
      categoryImgCode = "";
  }

  return (
    <section>
      <div>
        <img
          style={{ width: "100%" }}
          src={`https://i.ibb.co/${categoryImgCode}/${categoryRoute}-1.jpg`}
          alt={categoryRoute}
        />
      </div>

      <div className={classes["categories"]}>
        <h1>
          {categoryRoute.charAt(0).toUpperCase() + categoryRoute.substring(1)}
        </h1>
        <h2>TOP CATEGORIES</h2>
        <div className={classes["categories-list"]}>{displayCategoryTypes}</div>
      </div>
      <div className={classes["brands"]}>
        <h2>Featured Brands</h2>
        <div>
          <SliderComponent displaySlider={displayCategoryBrands} />
        </div>
      </div>
      <div className={classes["description"]}>
        {categoryRoute === "guitars" && <CategoriesDescriptionGuitars />}
        {categoryRoute === "pianos" && <CategoriesDescriptionPianos />}
        {categoryRoute === "drums" && <CategoriesDescriptionDrums />}
      </div>
    </section>
  );
}
