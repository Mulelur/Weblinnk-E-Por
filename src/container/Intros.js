import * as React from "react";
import { Intros } from "../components";

function Intro4({ children }) {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>Contact Me</Intros.Text>
              <Intros.Heading2>{children}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

function Intro2({ children }) {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>About Me </Intros.Text>
              <Intros.Heading2>{children}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Intro2, Intro4 };
