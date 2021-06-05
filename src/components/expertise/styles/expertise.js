import styled from "styled-components";
import { primaryColor } from "../../../colors/colors";

export const Container = styled.div`
  margin: 9rem 2rem;
`;

export const Content = styled.div``;

export const Text = styled.p`
  font-size: 1.4rem;
  margin: 2rem;
`;

export const MMTitle = styled.h2`
  font-size: 2.6rem;
  margin: 4.4rem;
  text-align: center;
`;

export const MM = styled.div`
  padding: 2.5rem;
  border: 1px solid ${primaryColor};
  border-radius: 1.5rem;
`;

export const MMBedge = styled.div`
  width: 12rem;
  height: 2.8rem;
  border-radius: 0.5rem;
  color: #ffffff;
  padding: 0.8rem;
  background-color: #e65f78;
  padding-left: 2rem;
  font-size: 1.2rem;
  font-weight: 700;

  margin-bottom: 2rem;
`;

export const MMContent = styled.div``;

export const MMText = styled.p`
  margin: 1.6rem;
  font-size: 1.4rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const List = styled.ul`
  list-style: none;
  margin: 1rem;
  width: 35rem;
`;

export const ListItem = styled.li`
  font-size: 1.3rem;
  text-transform: capitalize;
  padding: 2rem;
  margin: 1.5rem;
  heigth: 5rem;
  padding: 2.3rem;
  @media (max-width: 856px) {
    width: 100%;
  }
  transition: all 0.5s;
  box-shadow: 0 0 1px 0 rgba(6, 24, 44, 0.18), 0 1px 2px 0 rgba(6, 24, 44, 0.2);
  &:hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
`;

export const Subjects = styled.div`
  align-items: center;
  justify-content: center;
  padding: 2rem;
  display: flex;
  @media (max-width: 856px) {
    flex-direction: column;
    margin: 0 2rem;
  }
  margin-top: 4rem;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
