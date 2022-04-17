import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import About from "./components/About";
import Help from "./components/help/Help";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import CategoryPage from "./pages/CategoryPage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductPage from "./pages/ProductPage";
import FooterLinksPage from "./pages/FooterLinksPage";
import ShoppingHelpPage from "./pages/ShoppingHelpPage";
import CompanyInfoPage from "./pages/CompanyInfoPage";

function App() {
  return (
    <>
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
        </Routes>
      </ScrollToTop>
      <About />
      <Help />
      <Footer />
    </>
  );
}

export default App;
