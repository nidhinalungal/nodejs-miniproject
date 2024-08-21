export class SaleEvent {
  constructor(
    public readonly id: number,
    public readonly date: Date,
    public readonly description: string
  ) // Add other sale event properties here
  {}
}
