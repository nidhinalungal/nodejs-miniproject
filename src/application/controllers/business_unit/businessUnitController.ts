import { Request, Response } from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  requestBody,
  requestParam,
  response,
} from "inversify-express-utils";
import { Mediator } from "../../utilities/mediator/mediator";
import { TYPES } from "../../utilities/types";
import { IBusinessUnitProps } from "./dtos/IBusinessUnitProps";
import { IBusinessUnitRequest } from "./dtos/IBusinessUnitRequest";
import { validateBusinessUnitRequest } from "./validators/businessUnitRequestValidator";

@controller("/businessUnits")
class BusinessUnitController {
  constructor(
    @inject(TYPES.IMediator)
    private mediator: Mediator<
      IBusinessUnitProps | IBusinessUnitProps[],
      IBusinessUnitRequest | Request | number
    >
  ) {}

  @httpGet("/hello")
  public hello(req: Request, res: Response): void {
    res.status(200).json({
      message: "Welcome to BusinessUnitController!!",
    });
  }

  @httpPost("/", validateBusinessUnitRequest)
  public async createBusinessUnit(
    @requestBody() businessUnitRequest: IBusinessUnitRequest,
    @response() res: Response
  ): Promise<void> {
    const data = await this.mediator.send(
      TYPES.CreateBusinessUnitHandler,
      businessUnitRequest 
    );
    res.status(201).send(data);
  }

  @httpGet("/")
  public async getAllBusinessUnits(req: Request, res: Response): Promise<void> {
    const data = await this.mediator.send(TYPES.GetAllBusinessUnitsHandler, req);
    res.status(200).send(data);
  }

    @httpGet("/:id")
    public async getBusinessUnitById(
      @requestParam("id") id: number,
      @response() res: Response
    ): Promise<void> {
      const data = await this.mediator.send(TYPES.GetBusinessUnitByIdHandler, id);
      res.status(200).send(data);
    }
}
