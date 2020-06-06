import Joi from "@hapi/joi";

export const createPoints = {
  body: Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    whatsapp: Joi.string().min(1).required(),
    city: Joi.string().min(1).required(),
    uf: Joi.string().min(1).max(2).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    items: Joi.string().min(1).required(),
  }),
};

export const getPoint = {
  params: Joi.object({
    point_id: Joi.number().integer().required(),
  }),
};

export const getPoints = {
  query: Joi.object({
    city: Joi.string().min(1),
    uf: Joi.string().min(1).max(2),
    items: Joi.string(),
  }),
};
