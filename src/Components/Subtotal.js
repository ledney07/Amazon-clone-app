import React from "react";
import "./Css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}): <strong> {value}</strong>
            </p>

            <small className="checkout__gift">
              <input type="checkbox" /> <p>This order contains a gift</p>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
      <Link to="/">
        <button className="addMoreBtn">Add more items</button>
      </Link>
    </div>
  );
}

export default Subtotal;
