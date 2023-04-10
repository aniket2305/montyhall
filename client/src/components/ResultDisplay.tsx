import React from "react";
import { IResult } from "../types";
import { ProgressBar } from "./ProgressBar";

export function ResultDisplay({ result }: { result: IResult }) {
  const { noSwitchedDoor, switchedDoor } = result;

  return (
    <div className="mt-30">
      <h2 className="mb-10">Result</h2>

      <div className="flex items-stretch">
        <div className="result-label">
          <span>Change selection</span>
        </div>
        <div className="win-section">
          <div>
            <span>Win count: </span> {switchedDoor.winCount}
          </div>
          <div className="flex items-center gap-10">
            <span>Win percentage: </span>
            <ProgressBar progress={switchedDoor.winPercentage} />
          </div>
        </div>
        <div className="loss-section">
          <div>
            <span>Loss count: </span> {switchedDoor.lossCount}
          </div>
        </div>
      </div>
      <div className="flex mt-10 items-stretch">
        <div className="result-label">
          <span>Keep selection</span>
        </div>
        <div className="win-section">
          <div>
            <span>Win count: </span> {noSwitchedDoor.winCount}
          </div>
          <div className="flex items-center gap-10">
            <span>Win percentage: </span>
            <ProgressBar progress={noSwitchedDoor.winPercentage} />
          </div>
        </div>
        <div className="loss-section">
          <div>
            <span>Loss count: </span> {noSwitchedDoor.lossCount}
          </div>
        </div>
      </div>
    </div>
  );
}
