import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  // validations!!
  errors: string[] = [];

  allRestaurants: any[] = [];

  newRestaurant = {
    name: '',
    cuisine: '',
    // ratings: []
  };

  dupError = ''
  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.allRestaurants()
      .subscribe((data: any) => {
        this.allRestaurants = data.allRestaurants
        console.log(this.allRestaurants)
      })
  }
  // handleSubmit(newRestaurant) {
  //   // console.log(this.newRestaurant)
  //   this._httpService.createRestaurants(this.newRestaurant)
  //     .subscribe((data: any) => {
  //       if (this.allRestaurants != null) {
  //         for(let i = 0; i < this.allRestaurants.length; i++) {
  //           if(this.allRestaurants[i].name === newRestaurant.name){
  //             this.dupError = 'Please enter a unique name'
  //           }
  //         }
  //       }
          
  //       if (data.hasOwnProperty('errors')) {

  //         this.errors = data.errors;
  //         console.log(this.errors)
  //       }
  //       else {
  //         console.log(data);
  //         // this._httpService.editRestaurants(this.restaurantToShow._id, this.restaurantToShow);
  //         console.log(this.newRestaurant)
  //         this._router.navigate(['/'])
  //       }
        
        
  //     })
  // }

  handleSubmit(newRestaurant) {
    // console.log(this.newRestaurant)
    this._httpService.createRestaurants(this.newRestaurant)
      .subscribe((data: any) => {
        if (this.allRestaurants != null) {
            for(let i = 0; i < this.allRestaurants.length; i++) {
              if(this.allRestaurants[i].name === newRestaurant.name){
                this.dupError = 'Please enter a unique name'
              }
            }
          }

        if (data.hasOwnProperty('errors')) {

          this.errors = data.errors;
          console.log(this.errors)
        }
        else {
          console.log(data);
          this._httpService.createRestaurants(this.newRestaurant)
          this._router.navigate(['/resteraunts']);
        }
        
        
      })
  }


}
