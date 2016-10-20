import { Review } from "./review.model";

export class Restaurant {
  public averageRating: number=0;
  public averageWait: number=0;
  constructor(public name: string, public type: string, public address: string, public price: string, public reviews: Review[]) {
    for(var i = 0 ; i < reviews.length ; i ++)
    {
      this.averageRating += reviews[i].rating;
      this.averageWait += reviews[i].waitTime
    }

    this.averageRating /= reviews.length;
    this.averageWait /= reviews.length

    this.averageRating = Math.round(this.averageRating*100)/100;
    this.averageWait = Math.floor(this.averageWait);
 }


}
