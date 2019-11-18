import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css']
})
export class RestaurantReviewComponent implements OnInit {

  allReviews: any[] = [];
  stars: any[] = [];
  sorted: any[] = [];
  parameters: string = '';

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
            this.parameters = params.id;
            this.allReviews = data.restaurant.reviews;
            this.stars = data.restaurant.reviews
            // console.log(this.allReviews)
            // console.log(this.stars)
            console.log('SORTED', this.sortByKey(this.allReviews, this.stars));
            this.sorted = this.sortByKey(this.allReviews, this.stars)
          })
      })
  }
   sortByKey(allReviews, stars) {
    return allReviews.sort(function(a, b) {
        var x = a.stars; var y = b.stars;
        // console.log(((x < y) ? -1 : ((x > y) ? 1 : 0)));
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

  createReview(params) {
    this._activeRoute.params
    .subscribe((params: Params) => {

      this._httpService.findById(params.id)
        .subscribe((data:any) => {

          this._router.navigate(['resteraunts/' + params.id + '/review'])
        }
        )}
    )}


}
