export interface IMediator<T, P> {
  send(seviceIdentifier: symbol, req: P): Promise<T>;
}
