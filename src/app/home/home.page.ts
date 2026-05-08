import { Component, OnInit } from '@angular/core';
import { Foodcatalog } from '../api/foodcatalog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  public sample: any = {};

  constructor(private foodcatalog: Foodcatalog) {}

  async ngOnInit() {
    try {
      const res = await this.foodcatalog.getTopLevelCatalog();
      this.sample = res; //no need to .result
      console.log(res);
    } catch (error) {
      console.log("req error", error);
    }
  }
}
