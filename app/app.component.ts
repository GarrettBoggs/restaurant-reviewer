import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Bat-Dino Foodie Guide</h1>
    </div>
    <restaurant-list [childRestaurants] = 'allRestaurants'
    (clickDelete) ="deleteRestaurant($event)"></restaurant-list>
    <new-restaurant
      (newRestaurantSender)="addToRestaurants($event)"></new-restaurant>
  </div>
  `
})

export class AppComponent {
  public  cretaceousReviews: Review[] =[
    new Review(1,"The server tried to eat me",5),
    new Review(4,"The pachycephalosaurus steak broke my teeth",14),
    new Review(1,"No Brachiosauri!",55),
    new Review(3,"I prefered the Jurassic ",25),
    new Review(5,"Plenty of variety for carnivores",15)
  ]

  public  jurassicReviews: Review[] =[
    new Review(4,"Many cool Chickensauruses",12),
    new Review(4,"Cool looking gargoyle lizard in the corner",22),
    new Review(5,"Many Brachiosauri!",15),
    new Review(3,"Need more dinosaur steaks",32),
    new Review(5,"I like Stegosauruses",26)
  ]

  public robinReview: Review[] =[
    new Review(5,"Adam West is head chef",5),
    new Review(1,"No where near as cool as the Bat Lair",14),
    new Review(2,"Only served Appetizers.",21),
    new Review(4,"Above average for a food-cart",25)
  ]

  public batReview: Review[] =[
    new Review(2,"Why so cereal?",25),
    new Review(5,"Alfred's service is legendary",15),
    new Review(5,"Holy open door, Bat Man",21),
    new Review(3,"The steak is all mister FROZEN",22)
  ]

  public allRestaurants: Restaurant[] = [
    new Restaurant("The Cretaceous Cafe", "Dinosaur", "65 Million Years Ago", "$$$$", this.cretaceousReviews),
    new Restaurant("Robin's Restaurant", "Fast Food", "1008 Mountain Drive, Gotham", "$", this.robinReview),
    new Restaurant("Bat Lair", "Bat Food", "1007 Mountain Drive, Gotham", "$$$", this.batReview),
    new Restaurant("Jurassic Joint", "Dinosaur", "145 Million Years Ago", "$", this.jurassicReviews)

  ];



  addToRestaurants(newRestaurant:Restaurant){
    this.allRestaurants.push(newRestaurant);
  }

  deleteRestaurant(unluckyRestaurant: Restaurant){
    this.allRestaurants.splice(this.allRestaurants.indexOf(unluckyRestaurant),1);
  }
}
