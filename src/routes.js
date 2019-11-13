import React from "react";
import Home from "./Home";
import StudentDetails from "./StudentDetails";
import { BrowserRouter, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/student-details">
        <StudentDetails />
      </Route>
    </BrowserRouter>
  );
};
