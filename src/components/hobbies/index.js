import React from "react";
import { Container, Content, Text } from "./styles/hobbies";

export default function Hobbies({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hobbies.Content = function HobbiesContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Hobbies.Text = function HobbiesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
