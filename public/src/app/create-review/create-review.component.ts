import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  errors: any[] = []

  newReview:  any = {
    customer: '',
    stars: '',
    description: '',
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.findById(params.id)
          .subscribe((data:any) => {
            this.newReview = data.restaurant;
            console.log(this.newReview)
          })
      })
}

  handleSubmit(newReview)  {
    this._activeRoute.params
    .subscribe((params: Params) => {

      this._httpService.addReview(params.id, this.newReview)
        .subscribe((data:any) => {
          
          if (data.hasOwnProperty('errors')) {

              this.errors = data.errors;
              console.log(this.errors)
            }
            else {
              console.log(data);
              this._httpService.addReview(params.id, this.newReview);
              this._router.navigate(['/resteraunts']);
            }
          }
        )}
    )}


//   handleSubmit(newReview) {
//     // console.log(this.newProduct)
//     this._httpService.editRestaurants(this.newReview._id, this.newReview)
//       .subscribe((data: any) => {

//         if (data.hasOwnProperty('errors')) {

//           this.errors = data.errors;
//           console.log(this.errors)
//         }
//         else {
//           console.log(data);
//           this._httpService.addReview(this.newReview._id, this.newReview);
//           this._router.navigate(['/resteraunts']);
//         }
        

//       })
// }

}
