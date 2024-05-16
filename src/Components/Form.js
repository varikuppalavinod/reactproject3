

import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [form, setForm] = useState({
    medicinname: "",
    description: "",
    price: "",
    quantity: ""
  });

  const changehandle = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submithandler = (event) => {
    event.preventDefault();
  props.onFormSubmit(form);
  };

  return (
    <form className={classes.formbody} onSubmit={submithandler}>
      <div>
        <label>Medicine Name:</label>
        <input
          type="text"
          name="medicinname"
          value={form.medicinname}
          onChange={changehandle}
        />
      </div>
      <br />
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={changehandle}
        />
      </div>
      <br />
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={changehandle}
        />
      </div>
      <br />
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={changehandle}
        />
      </div>
      <br />
      <button type="submit">Add product</button>
    </form>
  );
};

export default Form;
