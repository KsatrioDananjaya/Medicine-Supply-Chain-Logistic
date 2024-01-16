import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <div className="container">
      <div className="header">
        <h3>Medicine Supply Chain Logistic</h3>
      </div>
      <br />
      <div className="register">
        <h5>
          Step 1: Owner Should Register Raw material suppliers ,Manufacturers,
          Distributors and Retailers
        </h5>
        <button
          onClick={redirect_to_roles}
          className="btn btn-outline-primary btn-sm"
        >
          <b>Register</b>
        </button>
      </div>
      <br />
      <div className="ordermedicines">
        <h5>Step 2: Owner should order medicines</h5>
        <button
          onClick={redirect_to_addmed}
          className="btn btn-outline-primary btn-sm"
        >
          <b>Order Medicines</b>
        </button>
      </div>
      <br />
      <div className="controlchain">
        <h5>Step 3: Control Supply Chain</h5>
        <button
          onClick={redirect_to_supply}
          className="btn btn-outline-primary btn-sm"
        >
          <b>Control Supply Chain</b>
        </button>
      </div>
      <br />
      <div className="track">
        <h5>
          <b>Track</b> the medicines:
        </h5>
        <button
          onClick={redirect_to_track}
          className="btn btn-outline-primary btn-sm"
        >
          <b>Track Medicines</b>
        </button>
      </div>
    </div>
  );
}

export default Home;
