import { Component, Output, EventEmitter} from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-restaurant',
  template:`
    <h2>Add a Restaurant</h2>
    <div id="new-restaurant">
      <label>Name</label>
      <input class="form-control" #newName>
      <label>Cuisine</label>
      <input class="form-control" #newType>
      <label>Address</label>
      <input class="form-control" #newAddress>
      <label>Price</label>
        <select class="form-control" #newPrice>
          <option val="$">$</option>
          <option val="$$">$$</option>
          <option val="$$$">$$$</option>
          <option val="$$$$">$$$$</option>
          <option val="$$$$$">$$$$$</option>
        </select>
        <button class="btn btn-primary" id="submit" (click)="createRestaurantClick(newName.value,newType.value,newAddress.value,newPrice.value); newName.value=''; newType.value=''; newAddress.value=''">Submit Restaurant</button>
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
