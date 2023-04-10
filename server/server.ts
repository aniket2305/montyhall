import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./routes/routes";

dotenv.config();

const port = process.env.PORT || 3000;

const options: cors.CorsOptions = {
  origin: "*",
};

const app = express();

app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
