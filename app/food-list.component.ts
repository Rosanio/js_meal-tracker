import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodInfoComponent } from './food-info.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CalorieCalculatorComponent } from './calorie-calculator.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList', 'selectedDay'],
  outputs: ['onSubmitNewFood'],
  directives: [FoodInfoComponent, NewFoodComponent, EditFoodComponent, CalorieCalculatorComponent],
  pipes: [HealthyPipe],
  template: `
    <div class="totalCalories">
      <h3>Total Calories: {{totalCalories()}}</h3><br>
      <h3>Average Calories per Meal: {{averageCalories()}}</h3>
      <calorie-calculator [calories]="totalCalories()"></calorie-calculator>
    </div>
    <div class="foodList">
      <select (change)="onChange($event.target.value)" class="form-control" id="healthPipe">
        <option value="all">Show all Foods</option>
        <option value="healthy">Show Healthy Foods</option>
        <option value="unhealthy">Show Foods that are Bad for you</option>
      </select>
      <div *ngFor="#currentFood of foodList | healthy:filterHealth">
        <h3 (click)="clickFood(currentFood)" class="foodItem">{{currentFood.name}}</h3>
        <food-info *ngIf="selectedFood === currentFood" [food]="currentFood"></food-info>
      </div>
      <edit-food [food]="selectedFood" *ngIf="selectedFood"></edit-food>
      <new-food (onSubmitNewFood)="submitNewFood($event)"></new-food>
    </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public filterHealth: string = "all";
  public onSubmitNewFood: EventEmitter<any>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  clickFood(clickedFood: Food) {
    if(this.selectedFood === clickedFood) {
      this.selectedFood = undefined;
    } else {
      this.selectedFood = clickedFood;
    }
  }
  submitNewFood(foodArray: Array<any>) {
    this.onSubmitNewFood.emit(foodArray);
  }
  onChange(filterOption) {
    this.filterHealth = filterOption;
  }
  totalCalories() {
    var totalCalories: number = 0;
    for(var i = 0; i < this.foodList.length; i++) {
      totalCalories += this.foodList[i].calories;
    }
    return totalCalories;
  }
  averageCalories() {
    var averageCalories: number = 0;
    var averageCaloriesString: string;
    for(var i = 0; i < this.foodList.length; i++) {
      averageCalories += this.foodList[i].calories;
    }
    averageCaloriesString = (Math.round((averageCalories/this.foodList.length)*100)/100).toFixed(2);
    if(averageCaloriesString === "NaN") {
      averageCaloriesString = "0";
    }
    return averageCaloriesString;
  }
}
