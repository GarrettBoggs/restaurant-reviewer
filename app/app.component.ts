import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <restaurant-list [childRestaurants] = 'allRestaurants' (clickSender)='showDetails($event)'
    (clickDelete) ="deleteRestaurant($event)"></restaurant-list>
    <restaurant-edit [childSelectedRestaurant]="selectedRestaurant" (doneClickedSender)="finishedEditing()"></restaurant-edit>
    <new-restaurant
      (newRestaurantSender)="addToRestaurants($event)"></new-restaurant>
  </div>
  `
})

export class AppComponent {
  public  dominosReview: Review[] =[
    new Review(3,"eh",5),
    new Review(5,"amazing",14),
    new Review(1,"enjoy your food poisoning",55)
  ]
  public allRestaurants: Restaurant[] = [
    new Restaurant("McDonalds", "Fast Food", "10 Main Street", "1", []),
    new Restaurant("Warscapia", "Fantasy Food", "Griffin Cloud", "3", []),
    new Restaurant("Don Pedro", "Mexican", "5th and Washington", "1", []),
    new Restaurant("Dominos", "Pizza", "Near PSU", "2", this.dominosReview)
  ];
  selectedRestaurant: Restaurant = null;
  showDetails(clickedRestaurant: Restaurant){
    this.selectedRestaurant = clickedRestaurant;
  }

  finishedEditing(){
    this.selectedRestaurant = null;
  }
  addToRestaurants(newRestaurant:Restaurant){
    this.allRestaurants.push(newRestaurant);
  }

  deleteRestaurant(unluckyRestaurant: Restaurant){
    this.allRestaurants.splice(this.allRestaurants.indexOf(unluckyRestaurant),1);
  }
}
