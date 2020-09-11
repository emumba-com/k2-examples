import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import "react-vis/dist/style.css";
import "antd/dist/antd.css";
import { Theme } from "@k2/utils";
import { theme } from "./theme";

const App: React.FC = (props: any) => {
  return (
    <Theme.ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </Theme.ThemeProvider>
  );
};

export default App;
