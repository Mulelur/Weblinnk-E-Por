import React from "react";
import {
  Image,
  Column,
  Container,
  Heading2,
  Heading4,
  Text,
  Section,
  Buttons,
} from "./styles/aboutMe";

export default function AboutMe({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}
AboutMe.Image = function AboutMeImage({ ...restProps }) {
  return <Image {...restProps} />;
};

AboutMe.Container = function AboutMeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

AboutMe.Column = function AboutMeColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

AboutMe.Heading2 = function AboutMeHeading2({ children, ...restProps }) {
  return <Heading2 {...restProps}>{children}</Heading2>;
};

AboutMe.Heading4 = function AboutMeHeading4({ children, ...restProps }) {
  return <Heading4 {...restProps}>{children}</Heading4>;
};

AboutMe.Text = function AboutMeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AboutMe.Buttons = function AboutMeButtons({ children, ...restProps }) {
  return <Buttons {...restProps}>{children}</Buttons>;
};
