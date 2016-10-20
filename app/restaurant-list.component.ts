import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Restaurant} from './restaurant.model';
import {Review} from './review.model';

@Component({
  selector: 'restaurant-list',
  template:
  `
  <div class="row">
    <select  class="form-control top-select" (change)="typeChange($event.target.value)">
        <option value="all">Show All Cuisines</option>
        <option *ngFor="let currentRestaurant of childRestaurants" value="{{currentRestaurant.type}}">{{currentRestaurant.type}}</option>
    </select>
    <select  id="price-range" class="form-control top-select" (change)="priceChange($event.target.value)">
      <option value="0">Show All Price Ranges</option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
      <option value="$$$$">$$$$</option>
      <option value="$$$$$">$$$$$</option>
    </select>
  </div>


  <div *ngFor="let currentRestaurant of childRestaurants |specialty:selectedType | price:selectedPrice">
    <div class="row">
      <div class="col-sm-6 restaurant-box">
        <h2>{{currentRestaurant.name}}</h2>
        <h2>{{ currentRestaurant.averageRating ? 'Average Review: ' + currentRestaurant.averageRating  : 'No Reviews'}}</h2>
        <h2>{{ currentRestaurant.averageWait ? 'Average Wait Time: ' +  currentRestaurant.averageWait + ' minutes' : 'No Wait Time Available'}}</h2>
        <h3>{{currentRestaurant.type}}</h3>
        <h4>{{currentRestaurant.address}}</h4>
        <h5>Price Range: {{currentRestaurant.price}}</h5>
        <button (click)="editButtonHasBeenClicked(currentRestaurant)" class="btn btn-info">Edit Restaurant</button>

        <button class="btn btn-danger" (click)="deleteButtonClicked(currentRestaurant)">Delete Restaurant</button>
        <div *ngIf="currentRestaurant === selectedReview">
          <new-review (newReviewSender)="(currentRestaurant.reviews).push($event)"
          (removeInterfaceSender)="finishedReview(); updateAverages(currentRestaurant)"
          ></new-review>
        </div>
        <div *ngIf="currentRestaurant===selectedRestaurant">
          <restaurant-edit [childSelectedRestaurant]="selectedRestaurant" (doneClickedSender)="finishedEditing()"></restaurant-edit>
        </div>
      </div>
      <div class="col-sm-6" >
        <list-reviews   [childReviewRestaurant]="currentRestaurant" ></list-reviews>
        <button (click)="reviewButtonClicked(currentRestaurant) " class="btn btn-primary add-review">Add Review</button>
      </div>
    </div>
  </div>
  `
})



export class RestaurantList{
  @Input() childRestaurants: Restaurant[];
  @Output() clickSender = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  deleteButtonClicked(chosenRestaurant: Restaurant){
    this.clickDelete.emit(chosenRestaurant);
  }

  public selectedRestaurant = null;
  public selectedReview = null;
  public selectedType: string= "all";
  public selectedPrice: string = "0";

  editButtonHasBeenClicked(resToEdit: Restaurant){
    this.selectedRestaurant = resToEdit;
  }



  reviewButtonClicked(clickedRestaurant: Restaurant){
    this.selectedReview = clickedRestaurant;
  }

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

  finishedEditing(){
    this.selectedRestaurant = null;
  }

}
