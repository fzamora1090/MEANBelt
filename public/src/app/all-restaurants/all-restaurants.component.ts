import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {

  allRestaurants: any[] = [];
  activeRestaurants: any = null

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this._httpService.allRestaurants()
      .subscribe((data: any) => {
        this.allRestaurants = data.allRestaurants
        console.log(this.allRestaurants)
      })
    
    }

    delete(id: string) {
      this._httpService.deleteRestaurants(id)
        .subscribe((data: any) => {
          for (let i = 0; i < this.allRestaurants.length; i++) {
            if (this.allRestaurants[i]._id == id) {
              return this.allRestaurants.splice(i, 1)
            }
          }
        })
    }

    // editRestaurant(restaurantId: string) {
    //   this._router.navigate(["resteraunts/" + restaurantId +"/edit"])
    // }

    viewReviews(restaurantId: string) {
      this._router.navigate(['resteraunts/' + restaurantId])
    }

    setActiveRestaurants(activeRestaurants) {
        this.activeRestaurants = activeRestaurants;
        console.log(activeRestaurants)

      }


    
}
