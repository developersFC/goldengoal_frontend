import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <div className="descForm">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        recusandae aliquid sunt, a dolorem ad corrupti voluptas fuga deserunt
        animi minima velit quam! Quibusdam maiores laborum sunt, ab culpa
        quidem.
      </div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Enter the country code </label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter the country code "
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <select
          style={{
            width: "125px",
            textAlign: "center",
            fontSize: "20px",
            width: "348px",
            height: "40px",
          }}
        >
          <option value="jo">jo</option>
          <option value="sy">sy</option>
          <option value="us">us</option>
          <option value="ksa">ksa</option>
          <option value="qt">qt</option>
          <option value="eg">eg</option>
        </select>
        <button className="form-input-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
