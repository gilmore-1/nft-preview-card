import React, { useState } from "react";
import equilibrium from "../../assets/images/image-equilibrium.jpg";
import avataria from "../../assets/images/image-avatar.png";

import {
  Card,
  Creation,
  Day,
  Eth,
  Footer,
  H3,
  HR,
  ImageOne,
  ImageTwo,
  NameSpan,
  P,
  Second,
} from "./CardStyled";

export default function CenteredCard() {
  return (
    <Card>
      <ImageOne src={equilibrium}></ImageOne>
      <H3>Equilibrium #3429</H3>
      <P>Our Equilibrium collection promotes balance and calm.</P>
      <Second>
        <Eth>
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>
          0.041 ETH
        </Eth>
        <Day>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              fill="#8BACD9"
            />
          </svg>
          3 days left
        </Day>
      </Second>
      <HR />
      <Footer>
        <ImageTwo src={avataria}></ImageTwo>
        <Creation>Creation of</Creation>
        <NameSpan>Jules Wyvern</NameSpan>
      </Footer>
    </Card>
  );
}
