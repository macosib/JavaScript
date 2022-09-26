import Buyable from "./Buyable";

export default class Phone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly model: string,
    readonly premium: boolean,
    readonly maxCount: boolean,
  ) {}
}