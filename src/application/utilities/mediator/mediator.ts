import { injectable } from "inversify";
import { IMediator } from "./IMediator";
import { IBusinessUnitRequest } from "../../controllers/business_unit/dtos/IBusinessUnitRequest";
import { IBusinessUnitProps } from "../../controllers/business_unit/dtos/IBusinessUnitProps";
import { IRequestHandler } from "../../handlers/interfaces/IRequestHandler";

@injectable()
export class Mediator<T,P> implements IMediator<T, P> {
  private _serviceFactory: <S>(serviceIdentifier: symbol) => IRequestHandler<T,P>;
  constructor(serviceFactory: <S>(serviceIdentifier: symbol) => IRequestHandler<T,P>) {
    this._serviceFactory = serviceFactory;
  }

  async send(seviceIdentifier: symbol, req: P): Promise<T> {
    const service = this._serviceFactory<P>(seviceIdentifier);
    return await service.handle(req);
  }
}
