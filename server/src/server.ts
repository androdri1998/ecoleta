import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());

app.get("/users", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(3333);
