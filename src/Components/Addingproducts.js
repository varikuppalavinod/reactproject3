
import React from "react";

const Addingproducts = ({ products }) => {
  return (
    <div>
      <h2>Product Details</h2>
      {products.map((product, index) => (
        <div key={index}>
          <p><strong>Medicine Name:</strong> {product.medicinname}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Addingproducts;
