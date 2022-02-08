import React from "react";

import MainSlider from "../components/MainSlider";
import MainPopularCategories from "../components/MainPopularCategories";
import MainFeaturedBrands from "../components/MainFeaturedBrands";
import MainDeals from "../components/MainDeals";

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
