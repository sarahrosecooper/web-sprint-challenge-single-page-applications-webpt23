import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Image = styled.div`
    vertical-align: top;
    display: block;
    width: 100vw;
    height: 400px;
    background: url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=2028&q=80)
    `;

    

const Homepage = () => {
  return (
    <div>
       
      <h1 style={{ fontSize: "1rem"} }>
        welcome to your new favorite pizza place!
      </h1>
     

      <br></br>
      <Image></Image>
      <Link to="/pizza">
        <button>Place your order here!</button>
      </Link>
    </div>
  );
};

export default Homepage;