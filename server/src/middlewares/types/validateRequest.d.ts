import Joi from "@hapi/joi";

export interface IValidateRequest {
  params?: Joi.Schema;
  query?: Joi.Schema;
  body?: Joi.Schema;
}

export type EScope = "params" | "query" | "body";
