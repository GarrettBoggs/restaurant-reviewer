import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Review} from "./review.model";
import {Restaurant} from "./restaurant.model";

@Component({
  selector: 'list-reviews',
  template: `
  <div id=reviews>
    <div *ngFor="let currentReview of childReviewRestaurant.reviews" >
      <p>Review: {{currentReview.description}}</p>
      <li>Rating: {{currentReview.rating}}</li>
      <li>Wait: {{currentReview.waitTime}} minute(s)</li>
      <button (click)="deleteButtonClick(currentReview)" class="btn btn-danger">Delete Review</button>
    </div>
    </div>
  `
})

export class ReviewListComponent{
  @Input() childReviewRestaurant: Restaurant;
  deleteButtonClick(currentReview){
    var reviewsArray: Review[] = this.childReviewRestaurant.reviews;
    this.childReviewRestaurant.averageRating =0;
    this.childReviewRestaurant.averageWait =0;
    reviewsArray.splice(reviewsArray.indexOf(currentReview),1);
      for(var i =0; i<reviewsArray.length;i++){
        this.childReviewRestaurant.averageRating  += reviewsArray[i].rating;
        this.childReviewRestaurant.averageWait  += reviewsArray[i].waitTime;
      }
      this.childReviewRestaurant.averageRating  /= reviewsArray.length;
      this.childReviewRestaurant.averageWait  /= reviewsArray.length;

        this.childReviewRestaurant.averageRating = Math.round(this.childReviewRestaurant.averageRating*100)/100;
      this.childReviewRestaurant.averageWait = Math.floor(this.childReviewRestaurant.averageWait);
  }
}
