import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";
import { primaryColor, textColor } from "../../../colors/colors";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.7rem;
  background-color: ${primaryColor};
  color: ${textColor};
`;

export const Nav = styled.nav`
  background-color: transparent;
  border-radius: 0px;
  z-index: 999;
  margin-bottom: 0px;
  transition: all 0.5s ease-in-out;
`;

export const NavLink = styled(ReachRouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  transition: all 0.5s ease-in-out;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  padding: 1rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  &:hover {
    color: #e65f78;
  }
`;

export const Image = styled.img``;

export const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;
  background-color: #33312e;
  width: 14rem;
  box-shadow: 0 1px 3px 0 rgba(6, 24, 44, 0.4);
`;

export const Menu = styled.div`
  padding: 1.4rem;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

export const Logo = styled.h3`
  margin-left: 1rem;
`;
