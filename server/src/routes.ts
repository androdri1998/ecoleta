import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import ItemsController from "./controllers/itemsController";
import PointsController from "./controllers/pointsController";
import validateRequest from "./middlewares/validateRequest";
import { createPoints, getPoint, getPoints } from "./schemas/pointsSchemas";

const routes = express.Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get("/items", itemsController.index);
routes.post(
  "/points",
  [upload.single("image"), validateRequest(createPoints, "body")],
  pointsController.create
);
routes.get(
  "/points",
  validateRequest(getPoints, "query"),
  pointsController.index
);
routes.get(
  "/points/:point_id",
  validateRequest(getPoint, "params"),
  pointsController.show
);

export default routes;
