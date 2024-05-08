import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProductsPage from "./pages/AllProductsPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        {/* <Route path="/product/:productId" element={<ProductDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
