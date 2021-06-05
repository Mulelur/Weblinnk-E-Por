import React from "react";
import { Hobbies } from "../../components";
import FooterContainer from "../footer";
import HeaderContainer from "../header";
import NavBarContainer from "../navBar";
import { HobbiesData } from "../../data/hobbiesData";

export default function HobbiesContainer() {
  return (
    <Hobbies>
      {HobbiesData.map((item) => {
        return (
          <Hobbies.Content>
            <Hobbies.Text>{item}</Hobbies.Text>
          </Hobbies.Content>
        );
      })}
    </Hobbies>
  );
}
