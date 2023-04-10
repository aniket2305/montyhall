import React, { FormEvent, useState } from "react";
import { Button } from "./Button";
import { ChangeSelect } from "./ChangeSelect";
import { ResultDisplay } from "./ResultDisplay";
import { SimulationInput } from "./SimulationInput";

export function SimulationComponent() {
  const [numSimulations, setNumSimulations] = useState("");
  const [selectedValue, setSelectValue] = useState("KEEP");
  const [result, setResult] = useState(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isDoorSwitched = selectedValue === "CHANGE" ? true : false;

    try {
      const response = await fetch("http://localhost:8000/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numSimulations: Number(numSimulations),
          isDoorSwitched: isDoorSwitched,
        }),
      });

      const resultData = await response.json();
      setResult(resultData);
    } catch (err) {
      console.log("OOPS! something went wrong", err);
    }
  };

  return (
    <>
      <div className="simulation-container">
        <form onSubmit={onSubmit} className="flex justify-center gap-10 flex-d">
          <div>
            <SimulationInput
              value={numSimulations}
              onChange={(event) => setNumSimulations(event.target.value)}
            />
          </div>

          <div>
            <ChangeSelect
              defaultValue={selectedValue}
              onChange={(event) => setSelectValue(event.target.value)}
            />
          </div>

          <div>
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>

      {result && <ResultDisplay result={result} />}
    </>
  );
}
