import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles/global-styles";
import styled from "styled-components";

import Home from "./pages/home";

export default function App() {
  const client = new ApolloClient({
    uri: "https://weblinnk-api.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Main>
          <Home />
        </Main>
      </ApolloProvider>
      <GlobalStyle />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;
