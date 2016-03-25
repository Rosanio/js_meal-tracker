import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs:['food'],
  template: `
    <div class="row">
      <div class="col-xs-4">
        <h2>Edit Food Information:</h2>
        <input [(ngModel)]="food.name" class="input-lg form-control"/>
        <input [(ngModel)]="food.details" class="input-lg form-control"/>
        <input [(ngModel)]="food.calories" class="input-lg form-control"/>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
