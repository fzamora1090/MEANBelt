import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import bootstrap from "bootstrap";

import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';
import { CreateReviewComponent } from './create-review/create-review.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    NewRestaurantComponent,
    AllRestaurantsComponent,
    EditRestaurantComponent,
    RestaurantReviewComponent,
    CreateReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
