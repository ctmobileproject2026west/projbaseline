import { Component, OnInit } from '@angular/core';
import { Foodcatalog } from '../api/foodcatalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  public sample: any = []; //top level type matters
  public selectedCat = "3";

  constructor(private foodcatalog: Foodcatalog, private router: Router) {}

  async ngOnInit() {
    try {
      const res = await this.foodcatalog.getTopLevelCatalog();
      this.sample = res; //no need to .result
      console.log(res);
    } catch (error) {
      console.log("req error", error);
    }
  }

  public selectCat(cat: any) {
    this.selectedCat = cat.id;
  }

  public goToFoodDetails(fooditem: any) {
    this.router.navigate(['fooddetail', { FoodItem: JSON.stringify(fooditem) }]);
  }

  //Utility
  public filterCat(catid: string) {
    const i = parseInt(catid, 10);
    return this.sample[i-1];
  }
}
