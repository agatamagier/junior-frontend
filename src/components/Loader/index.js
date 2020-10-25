import React from "react";
import styled from "styled-components";
import SpinnerGif from "./assets/spin.gif";

const Loader = styled.div`
  font-family: TTCommons-bold, sans-serif;
  font-size: 7rem;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  padding: 12rem 0 10rem;
  text-align: center;
  position: absolute;
  width: 100%;
  opacity: 0.7;
`;

export const LoadSpinner = () => (
    <Loader>
        <img src={ SpinnerGif} />
    </Loader>
);
