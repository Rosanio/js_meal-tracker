import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodInfoComponent } from './food-info.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodInfoComponent],
  template: `
    <div *ngFor="#currentFood of foodList">
      <h3>{{currentFood.name}}</h3>
      <food-info [food]="currentFood"></food-info>
    </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
}
