import { Request, Response, NextFunction } from "express";
import { IValidateRequest, EScope } from "./types/validateRequest";
import { CustomBadRequestError } from "../utils/Errors";

const validateRequest = (schema: IValidateRequest, scope: EScope) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema[scope]?.validateAsync(req[scope]);
    return next();
  } catch (err) {
    throw new CustomBadRequestError(err.message);
  }
};

export default validateRequest;
