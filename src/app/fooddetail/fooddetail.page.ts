import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.page.html',
  styleUrls: ['./fooddetail.page.scss'],
  standalone: false //TODO
})
export class FooddetailPage implements OnInit {
  public getDetail: any;
  public fooditemDetails: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetail = this.route.params.subscribe(params => {
      this.fooditemDetails = JSON.parse(params['FoodItem']);
    })
  }

}
