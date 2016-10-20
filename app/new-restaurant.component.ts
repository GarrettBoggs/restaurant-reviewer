import { Component, Output, EventEmitter} from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-restaurant',
  template:`
    <h2>Add a Restaurant</h2>
    <div>
      <label>Name</label>
      <input #newName>
      <label>Cuisine</label>
      <input #newType>
      <label>Address</label>
      <input #newAddress>
      <label>Price</label>
      <input type="number" max="5" min="1" #newPrice>
      <button class="btn btn-primary" (click)="createRestaurantClick(newName.value,newType.value,newAddress.value,newPrice.value); newName.value=''; newType.value=''; newAddress.value=''; newPrice.value=''">Submit Restaurant</button>
    </div>

  `
})

export class NewRestaurantComponent{
  @Output() newRestaurantSender = new EventEmitter();
  createRestaurantClick(name:string,type:string,address:string,price:string){
    var newRestaurant: Restaurant = new Restaurant(name,type,address,price,[]);
    this.newRestaurantSender.emit(newRestaurant);
  }

}
