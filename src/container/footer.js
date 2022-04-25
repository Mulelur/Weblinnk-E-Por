import React from "react";
import { Footer } from "../components";

export default function FooterContainer({ color }) {
  return (
    <Footer color={color}>
      <Footer.Box>
        <Footer.Container>
          <Footer.Content>
            <Footer.Tex>2022 © Violet. Design by Weblinnk</Footer.Tex>
          </Footer.Content>
        </Footer.Container>
      </Footer.Box>
    </Footer>
  );
}
