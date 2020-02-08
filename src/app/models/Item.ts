export class Item {
  constructor(
    public title: string,
    public description: string,
    public price: number,
    public images: Array<string>
  ) {}
}