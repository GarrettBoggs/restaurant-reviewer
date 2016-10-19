import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

  @Component({
    selector: 'restaurant-edit',
    template: `
      <div *ngIf="childSelectedRestaurant">
        <input [(ngModel)]="childSelectedRestaurant.name">
        <input [(ngModel)]="childSelectedRestaurant.type">
        <input [(ngModel)]="childSelectedRestaurant.address">
        <input [(ngModel)]="childSelectedRestaurant.price">
        <button (click) = "doneClicked()" class="btn btn-success"> Done </button>
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
