import { Review } from "./review.model";

export class Restaurant {
  constructor(public name: string, public type: string, public address: string, public price: string, public reviews: Review[]) { }
  public rating: number;
}
