import express, { Request, Response } from "express";
import { getResult } from "../utility/utils";

export const router = express.Router();

router.post("/result", function (req: Request, res: Response) {
  const { numSimulations, isDoorSwitched } = req.body;
  const result = getResult(numSimulations, isDoorSwitched);
  res.json(result);
});
