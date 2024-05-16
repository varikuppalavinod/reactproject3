
import Cart from "./Components/Cart";
import React, { useState } from "react";
import Form from "./Components/Form";
import Addingproducts from "./Components/Addingproducts";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleFormSubmit = (data) => {
    setProducts(prevProducts => [...prevProducts, data]);
  };

  return (
    <div>
      <div className="app">
        <Form onFormSubmit={handleFormSubmit} />
        <Cart />
      </div>
      <Addingproducts products={products} />
    </div>
  );
};

export default App;
