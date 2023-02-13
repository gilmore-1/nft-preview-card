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
        <Eth>0.041 ETH</Eth>
        <Day>3 days left</Day>
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
