import React from "react";
import {
  Container,
  Heading1,
  Heading4,
  Section,
  Download,
  Image,
  Text,
} from "./styles/sectionHeader";

export default function SectionHeader({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

SectionHeader.Container = function SectionHeaderContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

SectionHeader.Heading4 = function SectionHeaderHeading4({
  children,
  ...restProps
}) {
  return <Heading4 {...restProps}>{children}</Heading4>;
};

SectionHeader.Heading1 = function SectionHeaderHeading1({
  children,
  restProps,
}) {
  return <Heading1 {...restProps}>{children}</Heading1>;
};

SectionHeader.Download = function SectionHeaderDownload({
  children,
  ...restProps
}) {
  return <Download {...restProps}>{children}</Download>;
};

SectionHeader.Image = function SectionHeaderImage({ ...restProps }) {
  return <Image {...restProps} />;
};

SectionHeader.Text = function SectionHeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
