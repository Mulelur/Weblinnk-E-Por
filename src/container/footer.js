import React from "react";
import { Footer } from "../components";
import { FacebookIcon, InkedInIcon } from "../icons/icons";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.List>
        <Footer.ListItem>
          <Footer.Link href="https://www.facebok.com">
            <FacebookIcon />
          </Footer.Link>
        </Footer.ListItem>
        <Footer.ListItem>
          <Footer.Link href="https://www.linkedin.com">
            <InkedInIcon />
          </Footer.Link>
        </Footer.ListItem>
      </Footer.List>
      <Footer.Text>2018 - 2020 © Violet. Design by Weblinnk.</Footer.Text>
    </Footer>
  );
}
