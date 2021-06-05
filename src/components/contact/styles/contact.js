import styled from "styled-components";

export const Container = styled.div`
  margin: 9rem 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  margin: 4rem;
`;

export const Title = styled.h2`
  padding: 1.5rem;
  font-size: 2rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 725px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IconsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  text-align: center;
  @media (max-width: 725px) {
    margin-top: 2rem;
  }
`;

export const IconsTitle = styled.h3`
  padding: 0.5rem;
  font-size: 1.2rem;
`;

export const IconsText = styled.p``;

export const Icon = styled.img`
  padding-bottom: 1.2rem;
`;
