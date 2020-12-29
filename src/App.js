import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Auth/Login";
import { auth } from "./Components/Auth/firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./Components/StateProvider";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "sk_test_51HhhwlAwRVke1p0S2iDUtByoYQmLDEhbJVfMD0zS4wOT45prwQ4mM7gQbkeT7kmHiB4Zy40Jl2KrwojIWOz649qI00cRTh0H4G"
);

function App() {
  const [, dispatch] = useStateValue("");
  //will only run once when he app component loads.... useEffect is like a dynamic of a If statement

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in /the user was  logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
