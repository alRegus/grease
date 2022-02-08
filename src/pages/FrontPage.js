import React from "react";

import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import MainPopularCategories from "../components/MainPopularCategories";

export default function FrontPage() {
  return (
    <>
      <Header />
      <MainSlider />
      <MainPopularCategories />
    </>
  );
}
