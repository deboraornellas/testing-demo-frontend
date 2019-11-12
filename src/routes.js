import React, { Fragment } from "react";
import Home from "./Home";
import StudentDetails from "./StudentDetails";
import { BrowserRouter, Route } from "react-router-dom";

export const Routes = props => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/student-details">
                <StudentDetails student={props.student} />
            </Route>
        </BrowserRouter>
    );
};
