import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Food } from './index' ;

import 'rxjs/Rx';

@Injectable()
export class NutritionixService {
  private BASE_URL = "http://api.nutritionix.com/v1_1/search/";
  private APP_ID = "7b43b860";
  private API_KEY = "65a509b92f1d44aa3d1fd800a5e151c5";
  private API_KEY2 = "c06a55b3110132ca20255014d9a7a681";
  private API_KEY3 = "12ab39dc2925ef32fd49e7c4b68ea986";
  private POST_URL = "http://58fa637eae2db312008804af.mockapi.io/api/v1/FoodItems";
  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) { }


  getSearchResults(_searchString) {
    // fields to get back from API based on documenation
    let fields = 'item_name,item_id,brand_name,nf_calories,nf_total_fat,nf_saturated_fat,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein';
    let params: URLSearchParams = new URLSearchParams();
    params.set('results', '0:10');
    params.set('appId', this.APP_ID);
    params.set('appKey', this.API_KEY);
    params.set('fields', fields);
    // params.set('cal_min', '0');
    // params.set('cal_max', '50000');

    let url = this.BASE_URL + _searchString;
    //console.log(url);
    return this.http.get(url, { search: params })
      .map(res => res.json().hits);
  }

  deleteFromJournal(foodid: number) {
     return this.http.delete(`${this.POST_URL}/${foodid}`)
        .map((res: Response) => res.json());
  }

  addToJournal(food){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let newFood = new Food(food);
    let body = JSON.stringify(newFood);
    return this.http.post(this.POST_URL, body, options).map((res: Response)=> res.json());
  }
  
  getJournal(){
    return this.http.get(this.POST_URL).map((res: Response) => res.json());
  }  





}





