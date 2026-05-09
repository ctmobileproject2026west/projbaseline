import { Component, OnInit } from '@angular/core';
import { Foodcatalog } from '../api/foodcatalog';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  public sample: any = []; //top level type matters
  public selectedCat = "3";

  public succeeded = true;

  constructor(private foodcatalog: Foodcatalog, private router: Router, private loadingController: LoadingController, private toastController: ToastController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: "Loading catalogue..."
    });
    await loading.present();
    try {
      const res = await this.foodcatalog.getTopLevelCatalog();
      this.sample = res; //no need to .result
      console.log(res);
      this.succeeded = true;
    } catch (error) {
      this.succeeded = false;
      console.log("req error", error);
    } finally {
      await loading.dismiss();
    }
    if (!this.succeeded) {
      const toast = await this.toastController.create({
        message: "Sorry, there is an error getting info.",
        duration: 3000,
        position: 'bottom'
      });
      await toast.present();
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
