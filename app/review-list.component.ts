import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Review} from "./review.model";

@Component({
  selector: 'list-reviews',
  template: `
    <div *ngFor="let currentReview of childReview">
      <h1>Review: {{currentReview.description}}</h1>
      <h1>Rating: {{currentReview.rating}}</h1>
      <h1>Wait: {{currentReview.waitTime}}</h1>
      <button (click)="deleteButtonClick(currentReview)" class="btn btn-danger">Delete Review</button>
    </div>
  `
})

export class ReviewListComponent{
  @Input() childReview: Review[];

  deleteButtonClick(currentReview){
    this.childReview.splice(this.childReview.indexOf(currentReview),1);
  }
}
