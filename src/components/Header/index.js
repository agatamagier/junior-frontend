import React from "react";

import { Root, Wrapper, Logo, Navbar } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navbar>
        <li>
          <a
          href=""
          target="_blank"
          >
            Start</a>
        </li>
        <li>
          <a
          href="/my-profile"
          target="_blank"
          >
            My Profile</a>
        </li>
      </Navbar>
    </Wrapper>
  </Root>
);
