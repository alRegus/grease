import React from "react";
import { useSelector } from "react-redux";
import Carousel from "nuka-carousel";
import useHttp from "../hooks/useHttp";

import classes from "./CategoryPage.module.scss";
import CategoriesDescriptionDrums from "../components/categories/CategoriesDescriptionDrums";
import CategoriesDescriptionGuitars from "../components/categories/CategoriesDescriptionGuitars";
import CategoriesDescriptionPianos from "../components/categories/CategoriesDescriptionPianos";

export default function CategoryPage() {
  const categoryRoute = useSelector((state) => state.categoryRoute.route);

  const instrumentTypes = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );

  const instrumentBrands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );

  const categoryInstrumentTypes = instrumentTypes.filter((type) =>
    type.typeName.includes(categoryRoute)
  );

  const displayCategoryTypes = categoryInstrumentTypes.map((type) => (
    <div>
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
  ));

  const categoryBrands = instrumentBrands.filter((brand) =>
    brand.categoryAssociation.includes(categoryRoute)
  );

  const displayCategoryBrands = categoryBrands.map((brand) => (
    <div>
      <img src={brand.brandImgUrl} alt={brand.brandName} />
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
        <Carousel
          slidesToShow={4}
          slidesToScroll={4}
          wrapAround={true}
          defaultControlsConfig={{
            nextButtonText: ">",
            nextButtonStyle: {
              fontSize: "1.2rem",
              fontWeight: "700",
            },
            prevButtonStyle: {
              fontSize: "1.2rem",
              fontWeight: "700",
            },
            prevButtonText: "<",
            pagingDotsStyle: {
              fill: "gray",
              marginLeft: "5px",
            },
          }}
        >
          {displayCategoryBrands}
        </Carousel>
      </div>
      <div className={classes["description"]}>
        {categoryRoute === "guitars" && <CategoriesDescriptionGuitars />}
        {categoryRoute === "pianos" && <CategoriesDescriptionPianos />}
        {categoryRoute === "drums" && <CategoriesDescriptionDrums />}
      </div>
    </section>
  );
}
