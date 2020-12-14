import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="pizza">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Navigation;