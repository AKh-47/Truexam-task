import React from "react";
import "./App.scss";
import MainContetnt from "./components/HOC/MainContent/MainContetnt";
import ScoringTask from "./components/ScoringTask/ScoringTask";
import CreatingTask from "./components/CreatingTask/CreatingTask";

function App() {
  return (
    <div className="app">
      <MainContetnt>
        <ScoringTask />
        {/* <CreatingTask /> */}
      </MainContetnt>
    </div>
  );
}

export default App;
