import React from "react";
import { NavLink } from "react-router-dom";
import { NavList } from "../components/Header/styles"

const list = [
    {name: "Start", path: "/", exact: true },
    {name: "My profile", path: "my-profile", }
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact = {item.exact ? item.exact : false }>{item.name}</NavLink>
        </li>
    ))

    return (
            <NavList>
                {menu}
            </NavList>
    );
}

export default Navigation;