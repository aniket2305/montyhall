import React from "react";
import "./css/global.css";
import { SimulationComponent } from "./components/SimulationComponent";
import { QuestionIcon } from "./icons/QuestionIcon";

function App() {
  return (
    <div className="container">
      <h1 className="text-center page-heading ">Monty hall simulation</h1>

      <div className="flex w-full justify-center gap-10">
        <div className="door flex items-center justify-center">
          <QuestionIcon />
        </div>
        <div className="door flex items-center justify-center">
          <QuestionIcon />
        </div>
        <div className="door flex items-center justify-center">
          <QuestionIcon />
        </div>
      </div>

      <SimulationComponent />
    </div>
  );
}

export default App;
