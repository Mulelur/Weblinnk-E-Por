import React from "react";
import {
  Container,
  Header,
  Text,
  Title,
  Icon,
  IconsItem,
  Icons,
  IconsText,
  IconsTitle,
  Body,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Header = function ContactHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Contact.Icons = function ContactIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Contact.IconsItem = function ContactIconsItem({ children, ...restProps }) {
  return <IconsItem {...restProps}>{children}</IconsItem>;
};

Contact.IconsTitle = function ContactIconsTitle({ children, ...restProps }) {
  return <IconsTitle {...restProps}>{children}</IconsTitle>;
};

Contact.IconsText = function ContactIconsText({ children, ...restProps }) {
  return <IconsText {...restProps}>{children}</IconsText>;
};

Contact.Icon = function ContactIconsText({ ...restProps }) {
  return <Icon {...restProps} />;
};

Contact.Body = function ContactIconsBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
