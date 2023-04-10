export interface IResult {
  noSwitchedDoor: IWinLoss;
  switchedDoor: IWinLoss;
}

export interface IWinLoss {
  winCount: number;
  lossCount: number;
  winPercentage: number;
}
