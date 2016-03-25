import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="row">
      <div class="col-xs-3">
        <h2>Log a new food:</h2>
        <input type="text" placeholder="Name" class="form-control" #newName>
        <input type="text" placeholder="Details" class="form-control" #newDetails>
        <input type="number" placeholder="Calories" class="form-control" #newCalories>
        <button (click)="createFood(newName, newDetails, newCalories)" class="btn btn-primary">Go!</button>
      </div>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<any>
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  createFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var foodArray: Array<any> = [userName.value, userDetails.value, parseInt(userCalories.value)];
    this.onSubmitNewFood.emit(foodArray);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
