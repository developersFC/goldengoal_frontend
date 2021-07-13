import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Tables from './Tables';

const Form = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <Tables products={products} />
        </div>
        <FormSignup setProducts={setProducts} />
      </div>
    </>
  );
};

export default Form;
