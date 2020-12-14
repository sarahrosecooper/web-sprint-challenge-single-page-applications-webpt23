import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

// A name text input field
//  Validation for name - name must be at least 2 characters
//  A dropdown for pizza size
//  A checklist for toppings - at least 4 (hint: name each separately!)
//  Text input for special instructions
//  An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions

const PizzaForm = () => {
  const [formStart, setFormStart] = useState({
    name: "",
    sizes: {
      small: false,
      medium: false,
      large: false,
    },
    toppings: {
      pepperoni: false,
      mushroom: false,
      anchovie: false,
      bacon: false,
    },
    instructions: "",
  });

  const handleChanges = (e) => {
    if (e.target.type === "checkbox") {
      setFormStart({
        ...formStart,
        toppings: {
          ...formStart.toppings,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setFormStart({
        ...formStart,
        [e.target.name]: e.target.value,
      });
    }
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "minimum of 2 characters")
      .required("valid name please."),
  });

  const validateSchema = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((success) => {
        console.log("success!!", success);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const [apiData, setApiData] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formStart)
      .then((response) => {
        console.log("api data", response.data);
        setApiData(response.data);
      })

      .catch((error) => {
        console.log("error from data", error);
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        {/* ----- NAME ----- */}

        <label htmlFor="name">
          name:
          <input
            name="name"
            type="text"
            id="name"
            value={formStart.name}
            placeholder="please enter your name."
            onChange={handleChanges}
            data-cy="name"
          />
        </label>
        <br></br>

        {/* ----- SIZE DROPDOWN ------- */}

        <label htmlFor="sizes">
          pizza size:
          <select
            name="sizes"
            id="sizes"
            value={formStart.sizes}
            onChange={handleChanges}
            data-cy="sizes"
          >
            <option value="small" data-cy="small">
              small
            </option>
            <option value="medium" data-cy="medium">
              medium
            </option>
            <option value="large" data-cy="large">
              large
            </option>
          </select>
        </label>

        {/* ----- TOPPINGS ---- */}

        <fieldset>
          <legend>toppings:</legend>

          <label htmlFor="pepperoni">
            <input
              name="pepperoni"
              type="checkbox"
              id="pepperoni"
              onChange={handleChanges}
              data-cy="pepperoni"
            />
            pepperoni
          </label>

          <label htmlFor="mushroom">
            <input
              name="mushroom"
              type="checkbox"
              id="mushroom"
              onChange={handleChanges}
              data-cy="mushroom"
            />
            mushroom
          </label>

          <label htmlFor="bacon">
            <input
              name="bacon"
              type="checkbox"
              id="bacon"
              onChange={handleChanges}
              data-cy="bacon"
            />
            bacon
          </label>

          <label htmlFor="anchovie">
            <input
              name="anchovie"
              type="checkbox"
              id="anchovie"
              onChange={handleChanges}
              data-cy="anchovie"
            />
            anchovie
          </label>
        </fieldset>

        {/* ---- INSTRUCTIONS ---- */}

        <label htmlFor="instructions">
          any special instructions?
          <textarea
            name="instructions"
            id="instructions"
            value={formStart.instructions}
            placeholder="anything extra special...?"
            onChange={handleChanges}
            data-cy="instructions"
          />
        </label>
        <br></br>
        <br></br>

        {/* ----BUTTON-------- */}

        <button type="submit" data-cy="submit">
          ready?
        </button>
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </form>
    </div>
  );
};

export default PizzaForm;