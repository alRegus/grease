import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
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
