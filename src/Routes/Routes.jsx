import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "../Pages/Homepage";
import SignUpForm from "../Pages/SignUp";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Switch>
  );
}

export default Routes;
