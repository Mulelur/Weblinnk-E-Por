import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  //   width: 60rem;
  display: flex;
  margin: 0 3.4rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  @media (max-width: 876px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  //   max-width: 100%;
  height: 32rem;
  width: 45rem;
  object-fit: cover;
  @media (max-width: 876px) {
    width: 100%;
    height: 100%;
  }
`;

export const Column = styled.div`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  @media (max-width: 876px) {
    margin-bottom: 3.5rem;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
`;

export const Heading4 = styled.h4`
  margin-top: 1.9rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.6rem;
`;

export const Text = styled.p`
  color: #6c757d;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  margin-bottom: 5rem;
  @media (max-width: 400px) {
    margin: 2%;
    margin-bottom: 5%;
  }
`;
