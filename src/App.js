import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  color: red;
`;

const Header = styled.div`
border: 20px solid red;
color: red;
`

const App = () => {
  return (
    <div>
      <StyledDiv>
        <Navigation />
        <Header>
          <h1>simple pizza</h1>
        </Header>

        <div>
          <Route path="/pizza" render={() => <PizzaForm />} />
        </div>
        <Route exact path="/" render={() => <Homepage />} />
      </StyledDiv>
    </div>
  );
};
export default App;