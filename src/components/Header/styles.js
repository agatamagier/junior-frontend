import React from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.svg";

export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
 
`;

export const NavList = styled.ul`
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    list-style: none;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-right: 25px;
    
      & a {
        cursor: pointer;
        color: ${({ theme }) => theme.color.black};
        text-decoration: none;
      }
  }
`;
