import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-info',
  inputs: ['food'],
  template: `
    <p>{{food.details}}</p>
    <p>{{food.calories}}</p>
  `
})

export class FoodInfoComponent {
  public food: Food;
}
