import React from "react";
import { Link } from "react-router-dom";
import products from "../../Data/productData";
import "../../assets/css/Product.css";
const Products = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>List of products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price"> Rs: {product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
