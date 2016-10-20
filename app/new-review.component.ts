import { Component, Output, EventEmitter } from '@angular/core';
import { Review } from "./review.model";

@Component ({
  selector: 'new-review',
  template: `
  <div>
    <label>Description</label>
    <input type="text"  class="form-control" placeholder="Description" #xdescription required>
    <label>Wait Time</label>
    <input placeholder="Wait Time" type="number" class="form-control" required #xwaitTime>
    <label>Rating</label>
    <select #xrating>
      <option value='5'>5</option>
      <option value='4'>4</option>
      <option value='3'>3</option>
      <option value='2'>2</option>
      <option value='1'>1</option>
    </select>

    <button class="btn btn-warning"(click)="reviewCreate(xrating.value, xdescription.value, xwaitTime.value); xrating.value=''; xdescription.value=''; xwaitTime.value=''; hideReview()"> UNLEASH YOUR FURY!!! </button>
  </div>
  `
})

export class NewReviewComponent{
  @Output() newReviewSender = new EventEmitter();
  @Output() removeInterfaceSender = new EventEmitter();
  reviewCreate(newRating:string, newDescription: string, newWaitTime:string){
    var numRating = parseInt(newRating);
    var numWaitTime = parseInt(newWaitTime);

    var newReview: Review = new Review(numRating, newDescription, numWaitTime);
    this.newReviewSender.emit(newReview);

  }

  hideReview(){
    this.removeInterfaceSender.emit();
  }

}
