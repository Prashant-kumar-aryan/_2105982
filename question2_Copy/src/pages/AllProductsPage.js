import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllProductsPage.css"; // Import your CSS file for styling

const AllProductsPage = () => {
  const mockData = [
    {
      productName: "Laptop 2",
      price: 1582,
      rating: 4.93,
      discount: 39,
      availability: "yes",
    },
    {
      productName: "Laptop 15",
      price: 1069,
      rating: 4.51,
      discount: 25,
      availability: "yes",
    },
    {
      productName: "Laptop 5",
      price: 9135,
      rating: 4.25,
      discount: 31,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 10",
      price: 296,
      rating: 3.97,
      discount: 89,
      availability: "yes",
    },
    {
      productName: "Laptop 8",
      price: 153,
      rating: 3.3,
      discount: 22,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 11",
      price: 8408,
      rating: 2.66,
      discount: 82,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 2",
      price: 7240,
      rating: 2.66,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "Laptop 2",
      price: 7340,
      rating: 2.6,
      discount: 28,
      availability: "yes",
    },
    {
      productName: "Laptop 13",
      price: 2714,
      rating: 2.1,
      discount: 45,
      availability: "yes",
    },
    {
      productName: "Laptop 2",
      price: 8114,
      rating: 2.09,
      discount: 93,
      availability: "yes",
    },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState("AMZ");
  const [category, setCategory] = useState("Laptop");
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  const fetchProducts = async () => {
    try {
      const {
        data: { access_token },
      } = await axios.get("http://localhost:4000/api/auth", {
        params: {
          companyName: "goMart",
          clientID: "5b257f46-eada-4b33-ae3b-b5be90e15c1a",
          clientSecret: "afTkutKqOPMFRuPm",
          ownerName: "Prashant",
          ownerEmail: "2105982@kiit.ac.in",
          rollNo: "2105982",
        },
      });

      const response = await axios.get(
        `http://localhost:4000/api/products/${company}/${category}`,
        {
          params: {
            top,
            minPrice,
            maxPrice,
          },
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setProducts(response.data);
      setProducts(mockData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      //setError("Error fetching products. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div className="all-products">
      <h1>E-Commerce</h1>
      <div className="filters">
        <label htmlFor="companySelect">Company:</label>
        <select
          id="companySelect"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>

        <label htmlFor="categorySelect">Category:</label>
        <select
          id="categorySelect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Charger">Charger</option>
          <option value="Mouse">Mouse</option>
          <option value="Keypad">Keypad</option>
          <option value="Bluetooth">Bluetooth</option>
          <option value="Pendrive">Pendrive</option>
          <option value="Remote">Remote</option>
          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>
          <option value="Laptop">Laptop</option>
          <option value="PC">PC</option>
        </select>

        <label htmlFor="topInput">Top:</label>
        <input
          id="topInput"
          type="number"
          value={top}
          onChange={(e) => setTop(e.target.value)}
        />

        <label htmlFor="minPriceInput">Min Price:</label>
        <input
          id="minPriceInput"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <label htmlFor="maxPriceInput">Max Price:</label>
        <input
          id="maxPriceInput"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
