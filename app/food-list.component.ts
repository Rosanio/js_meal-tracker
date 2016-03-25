import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodInfoComponent } from './food-info.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodInfoComponent, NewFoodComponent, EditFoodComponent],
  pipes: [HealthyPipe],
  template: `
    <select (change)="onChange($event.target.value)" class="form-control" id="healthPipe">
      <option value="all">Show all Foods</option>
      <option value="healthy">Show Healthy Foods</option>
      <option value="unhealthy">Show Foods that are Bad for you</option>
    </select>
    <div *ngFor="#currentFood of foodList | healthy:filterHealth">
      <h3 (click)="clickFood(currentFood)">{{currentFood.name}}</h3>
      <food-info *ngIf="selectedFood === currentFood" [food]="currentFood"></food-info>
    </div>
    <edit-food [food]="selectedFood" *ngIf="selectedFood"></edit-food>
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public filterHealth: string = "all";
  clickFood(clickedFood: Food) {
    if(this.selectedFood === clickedFood) {
      this.selectedFood = undefined;
    } else {
      this.selectedFood = clickedFood;
    }
  }
  createFood(foodArray: Array<any>) {
    this.foodList.push(new Food(foodArray[0], foodArray[1], foodArray[2]));
  }
  onChange(filterOption) {
    this.filterHealth = filterOption;
  }
}
