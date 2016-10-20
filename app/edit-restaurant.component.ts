import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

  @Component({
    selector: 'restaurant-edit',
    template: `
      <div *ngIf="childSelectedRestaurant">
        <label>Restaurant Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedRestaurant.name">
        <label>Type of Food: </label>
        <input class="form-control" [(ngModel)]="childSelectedRestaurant.type">
        <label>Address: </label>
        <input class="form-control" [(ngModel)]="childSelectedRestaurant.address">
        <label>Cost: </label>
        <div class="row">
          <select id="rate-select" class="form-control" [(ngModel)]="childSelectedRestaurant.price">
            <option value='$'>$</option>
            <option value='$$'>$$</option>
            <option value='$$$'>$$$</option>
            <option value='$$$$'>$$$$</option>
            <option value='$$$$$'>$$$$$</option>
          </select>
          <button (click) = "doneClicked()" class="btn btn-success"> Done </button>
        </div>
      </div>
    `
  })

  export class EditRestaurantComponent {
    @Input() childSelectedRestaurant: Restaurant;
    @Output() doneClickedSender = new EventEmitter();
    doneClicked() {
      this.doneClickedSender.emit();
    }
  }
