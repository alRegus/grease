import React from "react";

import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import MainPopularCategories from "../components/MainPopularCategories";
import MainFeaturedBrands from "../components/MainFeaturedBrands";

export default function FrontPage() {
  return (
    <>
      <Header />
      <MainSlider />
      <MainPopularCategories />
      <MainFeaturedBrands />
    </>
  );
}
