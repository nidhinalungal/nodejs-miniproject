import { NextFunction, Request, Response } from "express";
import { BusinessUnitRequestSchema } from "./schema/businessUnitRequestSchema";

export function validateBusinessUnitRequest(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const schema = BusinessUnitRequestSchema.getInstance();
  //   .unknown(true)

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res
      .status(400)
      .send({ error: error.details.map((detail) => detail.message) });
    return;
  }

  next();
}
