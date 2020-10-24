import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";
import { Page } from "components/Page"

import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Router>
    <Header />
    <Page />
    </Router>
  </ThemeProvider>
);
