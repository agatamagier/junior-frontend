import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { NavList } from "../components/Header/styles"
import styled from "styled-components";

const NavButton = styled.button`

  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.black};
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
      outline: none;
  }
`;
const list = [
    {name: "Start", path: "/", exact: true },
    {name: "My profile", path: "/my-profile", }
]

const Navigation = () => {
    
    const history = useHistory();
    
    const handleOnClick = () => {
        const location = {
            pathname: "/my-profile"
        };
        history.push(location);
        window.location.reload();
    };
    const homePageOnClick = () => {
        const location = {
            pathname: "/"
        };
        history.push(location);
        window.location.reload();
    };

    /**
     * 
     * NavLink required manual reload to display related component therefore I replaced it with buttons
     * as no other solution worked for me
    */

    /**
      const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact = {item.exact ? item.exact : false }>{item.name}</NavLink>
        </li>
    ))
     */
   

    return (
            <NavList>
                {/* {menu} */}
                <NavButton onClick={homePageOnClick}>Start</NavButton>
                <NavButton onClick={handleOnClick}>My profile</NavButton>    
            </NavList>
    );
}

export default Navigation;