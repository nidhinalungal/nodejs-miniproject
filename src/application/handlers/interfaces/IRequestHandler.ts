export interface IRequestHandler<T, P> {
  handle(req: P): Promise<T>;
}
