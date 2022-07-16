import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Home from "./pages/home";


export default function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/',
    cache: new InMemoryCache()
  })

  return (
    <>
    <Router>
      <ApolloProvider client={client}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      </ApolloProvider>
    </Router>
    </>
  );
}
