import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  errors: any[] = [];

  
  activeRest: any = {
    name: '',
    cuisine: '',

  }

  @Input() public restaurantToShow
  newEdit: any = {
    name: '',
    cuisine: '',

  }
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this._activeRoute.params
    //   .subscribe((params: Params) => {

    //     this._httpService.findById(params.id)
    //       .subscribe((data:any) => {
    //         this.activeRest = data.restaurant;
    //         console.log(this.activeRest)
    //         this.newEdit = this.activeRest
    //       })
    //   })
  }
  
  handleSubmit(restaurantToShow) {
    // console.log(this.newProduct)
    this._httpService.editRestaurants(this.restaurantToShow._id, this.restaurantToShow)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {

          this.errors = data.errors;
          console.log(this.errors)
        }
        else {
          console.log(data);
          this._httpService.editRestaurants(this.restaurantToShow._id, this.restaurantToShow);
          this._router.navigate(['/resteraunts']);
        }
        

      })
  }

  unsetActive() {
    this.active
  }
  

}
