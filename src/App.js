import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import MainContetnt from "./components/HOC/MainContent/MainContetnt";
import ScoringTask from "./components/ScoringTask/ScoringTask";
import CreatingTask from "./components/CreatingTask/CreatingTask";
import TeacherMain from "./components/TeacherMain/TeacherMain";

function App() {
  return (
    <div className="app">
      <MainContetnt>
        <Router>
          <Switch>
            <Route path="/" exact component={TeacherMain} />
            <Route path="/add" component={CreatingTask} />
            <Route path="/score" component={ScoringTask} />
          </Switch>
        </Router>
      </MainContetnt>
    </div>
  );
}

export default App;
