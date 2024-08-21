import Joi, { ObjectSchema } from "joi";
import { IBusinessUnitRequest } from "../../dtos/IBusinessUnitRequest";

export class BusinessUnitRequestSchema {
  private static instance: ObjectSchema<IBusinessUnitRequest>;

  private constructor() {}

  public static getInstance(): ObjectSchema<IBusinessUnitRequest> {
    if (!BusinessUnitRequestSchema.instance) {
        BusinessUnitRequestSchema.instance = Joi.object<IBusinessUnitRequest>({
        name: Joi.string().required().not(null).messages({
          "string.base": "Registration number must be a string",
          "any.required": "Registration number is required",
          "any.invalid": "Registration number cannot be null",
        }),
        addressLine1: Joi.string().required().not(null).messages({
          "string.base": "Address must be a string",
          "any.required": "Address is required",
          "any.invalid": "Address cannot be null",
        }),
        districtId: Joi.number().integer().positive().required().messages({
          "number.base": "District ID must be a number",
          "number.integer": "District ID must be an integer",
          "number.positive": "District ID must be a positive number",
          "any.required": "District ID is required",
        }),
        createdBy: Joi.string().required().not(null).messages({
          "string.base": "CreatedBy must be a string",
          "any.required": "CreatedBy is required",
          "any.invalid": "CreatedBy cannot be null",
        }),
      });
    }
    return BusinessUnitRequestSchema.instance;
  }
}
