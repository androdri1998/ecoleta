import moment from "moment";
import { Request, Response } from "express";
import { IPointsController } from "./types/pointsController";
import { CustomNotFoundError } from "../utils/Errors";
import knex from "../database/connection";

class PointsController implements IPointsController {
  async create(req: Request, res: Response) {
    const trx = await knex.transaction();
    try {
      const {
        image,
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items,
      } = req.body;
      const datetimeNow = moment().utc().format("YYYY-MM-DD HH:mm:ss");

      const point = {
        image,
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        deleted: false,
        created_at: datetimeNow,
        updated_at: datetimeNow,
      };
      const insertedsPointsIds: number[] = await trx("points").insert(point);

      const point_id = insertedsPointsIds[0];
      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id: point_id,
          deleted: false,
          created_at: datetimeNow,
          updated_at: datetimeNow,
        };
      });

      await trx("point_items").insert(pointItems);

      await trx.commit();
      return res.json({
        id: point_id,
        ...point,
      });
    } catch (err) {
      await trx.rollback();
      throw err;
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { point_id } = req.params;
      const point = await knex("points")
        .where({ id: point_id, deleted: false })
        .first();

      if (!point) {
        throw new CustomNotFoundError("User not found");
      }

      const items = await knex("items")
        .join("point_items", "items.id", "=", "point_items.item_id")
        .where("point_items.point_id", point_id)
        .andWhere("items.deleted", false)
        .select("items.title");

      return res.json({ point, items });
    } catch (err) {
      throw err;
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { city, uf, items } = req.query;

      let parsedItems: number[] = [];
      if (items) {
        parsedItems = String(items)
          .split(",")
          .map((item) => Number(item.trim()));
      }
      let where = {};
      if (uf) {
        where = Object.assign(where, { uf: String(uf) });
      }
      if (city) {
        where = Object.assign(where, { city: String(city) });
      }

      let points = [];
      if (parsedItems.length > 0) {
        points = await knex("points")
          .join("point_items", "points.id", "=", "point_items.point_id")
          .whereIn("point_items.item_id", parsedItems)
          .where(where)
          .distinct()
          .select("points.*");
      } else {
        points = await knex("points")
          .join("point_items", "points.id", "=", "point_items.point_id")
          .where(where)
          .distinct()
          .select("points.*");
      }

      return res.json({ results: points });
    } catch (err) {
      throw err;
    }
  }
}

export default PointsController;
