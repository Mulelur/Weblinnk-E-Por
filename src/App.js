import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";

const url = "http://localhost:1337/api/projects/1";

export default function App() {
  const project = useStoreState((state) => state.project);

  const setProject = useStoreActions((actions) => actions.setProject);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.data.attributes);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
