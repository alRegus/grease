import React from "react";

import MainSlider from "../components/front-page/MainSlider";
import MainPopularCategories from "../components/front-page/MainPopularCategories";
import MainFeaturedBrands from "../components/front-page/MainFeaturedBrands";
import MainDeals from "../components/front-page/MainDeals";

export default function FrontPage() {
  return (
    <>
      <MainSlider />
      <MainPopularCategories />
      <MainFeaturedBrands />
      <MainDeals />
    </>
  );
}
