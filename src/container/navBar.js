import React, { useState } from "react";
import { NavBar } from "../components";
import { NavData } from "../data/navData";
import { MenuIcon } from "../icons/icons";

export default function NavBarContainer() {
  const [toggel, setToggel] = useState(false);
  const [toggelMenu, setToggelMenu] = useState(false);
  return (
    <NavBar>
      <NavBar.Container>
        <NavBar.NavLink>
          {/* <NavBar.Image  /> */}
          <NavBar.Logo>Violet</NavBar.Logo>
        </NavBar.NavLink>
        <NavBar.Menu
          onClick={(e) => {
            setToggelMenu(!toggelMenu);
          }}
        >
          <MenuIcon />
        </NavBar.Menu>
        {toggelMenu && (
          <NavBar.DropDown>
            {NavData.map((item) => {
              return (
                !item.type && (
                  <NavBar.ListItem>
                    <NavBar.NavLink to={item.path}>{item.title}</NavBar.NavLink>
                  </NavBar.ListItem>
                )
              );
            })}
            <NavBar.ListItem
              onClick={(e) => {
                setToggel(!toggel);
              }}
            >
              More
            </NavBar.ListItem>
            {toggel && (
              <NavBar.DropDown>
                {NavData.map((item) => {
                  return (
                    item.type === "more" && (
                      <NavBar.ListItem>
                        <NavBar.NavLink to={item.path}>
                          {item.title}
                        </NavBar.NavLink>
                      </NavBar.ListItem>
                    )
                  );
                })}
              </NavBar.DropDown>
            )}
          </NavBar.DropDown>
        )}

        <NavBar.List>
          {NavData.map((item) => {
            return (
              !item.type && (
                <NavBar.ListItem>
                  <NavBar.NavLink to={item.path}>{item.title}</NavBar.NavLink>
                </NavBar.ListItem>
              )
            );
          })}
          <NavBar.ListItem
            onClick={(e) => {
              setToggel(!toggel);
            }}
          >
            More
          </NavBar.ListItem>
          {toggel && (
            <NavBar.DropDown>
              {NavData.map((item) => {
                return (
                  item.type === "more" && (
                    <NavBar.ListItem>
                      <NavBar.NavLink to={item.path}>
                        {item.title}
                      </NavBar.NavLink>
                    </NavBar.ListItem>
                  )
                );
              })}
            </NavBar.DropDown>
          )}
        </NavBar.List>
      </NavBar.Container>
    </NavBar>
  );
}
