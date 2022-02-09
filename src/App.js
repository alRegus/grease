import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Help from "./components/help/Help";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import CategoryPage from "./pages/CategoryPage";
import ProductsListPage from "./pages/ProductsListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="products-list" element={<ProductsListPage />} />
      </Routes>
      <About />
      <Help />
      <Footer />
    </>
  );
}

export default App;
