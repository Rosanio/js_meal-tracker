import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs:['food'],
  template: `
    <h2>Edit Food Information:</h2>
    <input [(ngModel)]="food.name" class="input-lg"/>
    <input [(ngModel)]="food.details" class="input-lg"/>
    <input [(ngModel)]="food.calories" class="input-lg"/>
  `
})

export class EditFoodComponent {
  public food: Food;
}
