import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 

import { NutritionixService } from './nutritionix.service';
import { Router } from '@angular/router';
import { Food } from './food';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit {
  //array of items found
  items = [];
  foodObj;
  resultArray;
  jentries = [];
  show:boolean = false;

  //search string
  searchQuery;

  static get parameters() {
    return [[NutritionixService]];
  }

  constructor(private nutritionixService: NutritionixService) { }

  ngOnInit(): any {
    this.getJournalFromService();
    this.generateNow();
    //TODO:call a get current user method  and generate the entryID using userid and generateNow();

  }

  
  generateNow():string{
    let nowStr:string;
    let now = new Date();
    let month = now.getMonth()+1;
    nowStr = now.getFullYear() + ""+ month + ""+ now.getDate();
    return nowStr;
  }

  //gets items from nutritionx search endpoint
  getItems(term: string) {
    let q = term;
    //this.searchQuery.trim()
    if (q == '' || q.length < 3) {
      return;
    }

    this.nutritionixService.getSearchResults(q).subscribe(
      data => {
        console.log('search results', data/*.hits*/)
        this.items = data
      },
      (err) => alert("Error searching: " + err)
    )
  }

  getJournalFromService() {
    this.nutritionixService.getJournal().subscribe(
      data => { this.jentries = data },
      // err => console.error(err),
      () => console.log('...done loading entries')
    );
  }

  addFoodToJournal(term) {
    this.nutritionixService.addToJournal(term).subscribe(
      data => {
        this.getJournalFromService();
        return true;
      },
      error => {
        console.log("Error adding food to Journal");
      }
    );
  }

  deleteFood(food) {
    if (confirm("Delete entry: " + food.item_name + "?")) {
      this.nutritionixService.deleteFromJournal(food.item_id).subscribe(
        data => {
          this.getJournalFromService();
        }
      )
    }
  }





}
