import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const categoryRoute = useSelector((state) => state.categoryRoute.route);
  console.log(categoryRoute);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="category" element={<CategoryPage />} />
      </Routes>
      <About />
      <Footer />
    </>
  );
}

export default App;
