import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooddetailPage } from './fooddetail.page';

describe('FooddetailPage', () => {
  let component: FooddetailPage;
  let fixture: ComponentFixture<FooddetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
