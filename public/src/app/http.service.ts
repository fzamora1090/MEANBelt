import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  allRestaurants() {

    return this._httpClient.get('/api/restaurants')
  }

  createRestaurants(newRestaurants) {

    return this._httpClient.post('/api/restaurants', newRestaurants)
  }
  
  editRestaurants(id, edits) {

    return this._httpClient.put('/api/restaurants/update/' + id, edits)
  }

  deleteRestaurants(id) {

    return this._httpClient.delete('/api/restaurants/delete/' + id)
  }

  findById(id) {
    return this._httpClient.get('/api/restaurants/' + id)
  }

  addReview(id, newReview) {
    return this._httpClient.post('api/review/restaurants/' +  id, newReview)

  }

}


