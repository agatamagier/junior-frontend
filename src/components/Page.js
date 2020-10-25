import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { UserProfile } from "../pages/UserProfile"

export const Page = () => {
    return (
        <Router>
            <div>
            <Route path="/" exact component={Home} />
            <Route path="/my-profile" exact component={UserProfile} />
            </div>
        </Router>
        
    );
}