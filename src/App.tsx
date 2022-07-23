import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles/global-styles";
import styled from "styled-components";

import Home from "./pages/home";

export default function App() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
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
