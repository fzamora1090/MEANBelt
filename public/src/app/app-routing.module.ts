import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { CreateReviewComponent } from './create-review/create-review.component';


const routes: Routes = [
  {
    path: 'resteraunts/new',
    component: NewRestaurantComponent
    // create new restaurant
  },
  {
    path: 'resteraunts',
    component: AllRestaurantsComponent
    // show all restaurants
  },
  {
    path: 'resteraunts/:id',
    component: RestaurantReviewComponent
    // show all reviews for a restaurant
  },
  {
    path: 'resteraunts/:id/edit',
    component: EditRestaurantComponent
    // for editing a restaurant
  },
  {
    path: 'resteraunts/:id/review',
    component: CreateReviewComponent
    // for creating a review for a restaurant
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
