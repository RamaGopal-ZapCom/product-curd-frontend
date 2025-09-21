import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data.data || []);
        setMessage(response.data.message);
        setError("");
      })
      .catch(() => setError("Failed to fetch products"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Products List</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Rate</th>
            <th>Vendors</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.prodId}>
              <td>{product.prodName}</td>
              <td>₹{product.prodRate.toLocaleString()}</td>
              <td>{product.vendors.map(v => v.vendorName).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
