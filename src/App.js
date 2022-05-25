import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ScrollToTop from "./ScrollToTop";
import Spinner from "./components/spinner/Spinner";
import Header from "./components/Header";
import About from "./components/About";
import Help from "./components/help/Help";
import Footer from "./components/Footer";
/* import FrontPage from "";
import CategoryPage from "./pages/CategoryPage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductPage from "./pages/ProductPage";
import FooterLinksPage from "./pages/FooterLinksPage";
import ShoppingHelpPage from "./pages/ShoppingHelpPage";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import CartPage from "./pages/CartPage"; */
const FrontPage = React.lazy(() => import("./pages/FrontPage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const ProductsListPage = React.lazy(() => import("./pages/ProductsListPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const FooterLinksPage = React.lazy(() => import("./pages/FooterLinksPage"));
const ShoppingHelpPage = React.lazy(() => import("./pages/ShoppingHelpPage"));
const CompanyInfoPage = React.lazy(() => import("./pages/CompanyInfoPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

function App() {
  const overflow = useSelector((state) => state.overflow.overflow.overflow);
  document.body.style.overflow = overflow;

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="products-list" element={<ProductsListPage />} />
            <Route path="product" element={<ProductPage />}>
              <Route path=":id" element={<ProductPage />} />
            </Route>
            <Route path="help" element={<FooterLinksPage />}>
              <Route path=":type" element={<FooterLinksPage />} />
            </Route>
            <Route path="nspc" element={<ShoppingHelpPage />}>
              <Route path=":nspcType" element={<ShoppingHelpPage />} />
            </Route>
            <Route path="info" element={<CompanyInfoPage />}>
              <Route path=":infoType" element={<CompanyInfoPage />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </ScrollToTop>
        <About />
        <Help />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
