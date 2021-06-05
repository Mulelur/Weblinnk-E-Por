import React from "react";
import { CvButton, LatterButton } from "./styles/button";

export function DownloadCVButton({ children, ...restProps }) {
  return <CvButton {...restProps}>{children}</CvButton>;
}

export function DownloadlatterButton({ children, ...restProps }) {
  return <LatterButton {...restProps}>{children}</LatterButton>;
}
