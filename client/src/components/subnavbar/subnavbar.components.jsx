import React from "react";
import "./subnavbar.styles.css";

const Subnavbar = () => {
  return (
    <div className="sidenav">
      <div className="user-profile-content">
        <img
          className="user-img"
          src={
            "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
          }
          alt=""
        />
        <div className="user-content">
          <h3>Helen Deriniacs</h3>
          <p>Sales Manager</p>
        </div>
      </div>
      <div className="nav-container">
        <div>
          <h3>Dashboard</h3>
          <ul className="sub-nav-option">
            <li>Product Management</li>
            <li>Sales Management</li>
            <li>Order Management</li>
            <li>Customer Statics</li>
            <li>Daily Order</li>
            <li>Order Details</li>
            <li>Leaderboards</li>
            <li>Supplier Details</li>
            <li>User Analytics</li>
          </ul>
        </div>

        <div>
          <p>Help Started</p>
          <p>Add New Folder</p>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
