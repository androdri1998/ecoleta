require("dotenv").config({ path: ".env" });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import "express-async-errors";

import routes from "./routes";
import errorMiddleware from "./middlewares/errorMIddleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use("/svgs", express.static(path.resolve(__dirname, "..", "svgs")));

app.use(errorMiddleware());

app.listen(3333);
