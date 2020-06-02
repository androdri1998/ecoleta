import moment from "moment";
import Knex from "knex";

export async function seed(knex: Knex) {
  const dateTimeNow = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  await knex("items").insert([
    {
      title: "Lâmpadas",
      image: "lampadas.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Pilhas e Baterias",
      image: "baterias.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Papéis e Papelão",
      image: "papeis-papelao.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Resíduos Eletrônicos",
      image: "eletronicos.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Resíduos Orgânicos",
      image: "organicos.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
    {
      title: "Óleo de conzinha",
      image: "oleo.svg",
      deleted: false,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,
    },
  ]);
}
