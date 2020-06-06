import moment from "moment";
import Knex from "knex";

export async function seed(knex: Knex) {
  const dateTimeNow = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  await knex("items").insert([
    {
      title: "Lamps",
      image: "lampadas.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Stacks and Batteries",
      image: "baterias.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Papers and Cardboard",
      image: "papeis-papelao.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Electronic Waste",
      image: "eletronicos.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Organic Waste",
      image: "organicos.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Kitchen oil",
      image: "oleo.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
  ]);
}
