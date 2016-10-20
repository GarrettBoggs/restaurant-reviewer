import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Restaurant} from './restaurant.model';
import {Review} from './review.model';

@Component({
  selector: 'restaurant-list',
  template:
  `<label>Type of Restaurant</label>
  <select (change)="typeChange($event.target.value)">
    <option value="all">All</option>
    <option value="Fantasy Food">Fantasy</option>
    <option value="Fast Food">Fast</option>
    <option value="Mexican">Mexican</option>
    <option value="Pizza">Pizza</option>
  </select>
  <select (change)="priceChange($event.target.value)">
    <option value="0">All</option>
    <option value="1">$</option>
    <option value="2">$$</option>
    <option value="3">$$$</option>
    <option value="4">$$$$</option>
    <option value="5">$$$$$</option>
  </select>

    <div *ngFor="let currentRestaurant of childRestaurants |specialty:selectedType | price:selectedPrice">
      <h2>{{currentRestaurant.name}}</h2>
      <h2>{{ currentRestaurant.averageRating ? 'Average Review: ' + currentRestaurant.averageRating  : 'No Reviews'}}</h2>
      <h2>{{ currentRestaurant.averageWait ? 'Average Wait Time: ' +  currentRestaurant.averageWait + ' minutes' : 'No Wait Time Available'}}</h2>
      <h3>{{currentRestaurant.type}}</h3>
      <h4>{{currentRestaurant.address}}</h4>
      <h5>Price Range: {{currentRestaurant.price}}</h5>
      <list-reviews [childReviewRestaurant]="currentRestaurant" ></list-reviews>
      <div *ngIf="currentRestaurant === selectedReview">
        <new-review (newReviewSender)="(currentRestaurant.reviews).push($event)"
        (removeInterfaceSender)="finishedReview(); updateAverages(currentRestaurant)"
        ></new-review>
      </div>
      <button (click)="editButtonHasBeenClicked(currentRestaurant)" class="btn btn-info">Edit Restaurant</button>
      <button (click)="reviewButtonClicked(currentRestaurant)" class="btn btn-primary">Add Review</button>
      <button class="btn btn-danger" (click)="deleteButtonClicked(currentRestaurant)">Delete Restaurant</button>
    </div>

  `
})
// add review button here as well


export class RestaurantList{
  @Input() childRestaurants: Restaurant[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(resToEdit: Restaurant){
    this.clickSender.emit(resToEdit);
  }

  @Output() clickDelete = new EventEmitter();
  deleteButtonClicked(chosenRestaurant: Restaurant){
    this.clickDelete.emit(chosenRestaurant);
  }

  public selectedReview = null;

  reviewButtonClicked(clickedRestaurant: Restaurant){
    this.selectedReview = clickedRestaurant;
  }

  public selectedType: string= "all";
  public selectedPrice: string = "0";

  updateAverages(curRestaurant:Restaurant){
    curRestaurant.averageRating=0;
    curRestaurant.averageWait=0;
    for(var i = 0 ; i < curRestaurant.reviews.length ; i ++)
    {
      curRestaurant.averageRating += curRestaurant.reviews[i].rating;
      curRestaurant.averageWait += curRestaurant.reviews[i].waitTime;
    }

    curRestaurant.averageRating /= curRestaurant.reviews.length;
    curRestaurant.averageWait /= curRestaurant.reviews.length;

    curRestaurant.averageRating =  Math.round(curRestaurant.averageRating*100)/100;
    curRestaurant.averageWait =  Math.floor(curRestaurant.averageWait);
   }


  typeChange(chosenType:string){
    this.selectedType = chosenType;
  }

  priceChange(chosenPrice:string){
    this.selectedPrice = chosenPrice;
  }

  finishedReview(){
    this.selectedReview=null;

  }

}
