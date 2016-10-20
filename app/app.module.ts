import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RestaurantList } from './restaurant-list.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { FormsModule } from '@angular/forms';
import { SpecialtyPipe } from './specialty.pipe';
import { PricePipe } from './price.pipe';
import { ReviewListComponent } from './review-list.component';
import { NewReviewComponent } from './new-review.component'
import { RatingPipe } from './rating.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent,
    RestaurantList,
    EditRestaurantComponent,
    NewRestaurantComponent,
    SpecialtyPipe,
    PricePipe,
    ReviewListComponent,
    NewReviewComponent,
    RatingPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
