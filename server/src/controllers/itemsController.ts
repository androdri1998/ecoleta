import { Request, Response } from "express";
import {
  IItemsController,
  IResponseItem,
  IItem,
} from "./types/itemsController";
import knex from "../database/connection";
import config from "../utils/config";

class ItemsController implements IItemsController {
  async index(req: Request, res: Response): Promise<Response<IResponseItem[]>> {
    const items: IItem[] = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        image_url: `${config.base_api_url}/uploads/${item.image}`,
        title: item.title,
      };
    });
    return res.json({ results: serializedItems });
  }
}

export default ItemsController;
