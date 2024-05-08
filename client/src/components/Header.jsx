import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import ProductDetailPage from "./pages/ProductDetailPage";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              All Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product/1" className="nav-link">
              Product Detail
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
