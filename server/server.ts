import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getResult } from "./utility/utils";
import bodyParser from "body-parser";

dotenv.config();

const port = process.env.PORT || 3000;

const options: cors.CorsOptions = {
  origin: "*",
};

const app = express();

app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/result", function (req: Request, res: Response) {
  const { numSimulations, isDoorSwitched } = req.body;
  const result = getResult(numSimulations, isDoorSwitched);
  res.json(result);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
