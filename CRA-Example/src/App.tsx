import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import "react-vis/dist/style.css";
import "antd/dist/antd.css";

const App: React.FC = (props: any) => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
