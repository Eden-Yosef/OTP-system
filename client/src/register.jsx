import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import handleRegister from "./utils/functions/handleRegister";

function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="formContainer">
      <div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <form className="form">
        <p className="title">Register </p>
        <label>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            className="input"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="Birth (YYYY-MM-DD)"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </label>

        <button
          onClick={() =>
            handleRegister(email, firstName, lastName, phone, birth)
          }
          className="submit"
        >
          Submit
        </button>
        <p>
          Already have an acount? <Link to="/">Signin</Link>
        </p>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Register;
