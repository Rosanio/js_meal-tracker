import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodInfoComponent } from './food-info.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodInfoComponent],
  template: `
    <div *ngFor="#currentFood of foodList">
      <h3 (click)="clickFood(currentFood)">{{currentFood.name}}</h3>
      <food-info *ngIf="selectedFood === currentFood" [food]="currentFood"></food-info>
    </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  clickFood(clickedFood: Food) {
    if(this.selectedFood === clickedFood) {
      this.selectedFood = undefined;
    } else {
      this.selectedFood = clickedFood;
    }
  }
}
