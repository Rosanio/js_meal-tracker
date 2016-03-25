import { Component } from 'angular2/core';
import { Food } from './food.model';
import {FoodListComponent} from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <hr>
    <food-list [foodList]="foodList"></food-list>
  </div>
    `
})

export class AppComponent {
  public foodList: Food[] = [
    new Food("Oatmeal", "Tasted like oatmeal", 160),
    new Food("Apple", "Kept the doctor away", 95),
    new Food("Carrots", "Healthiest thing I'll ever eat", 48),
    new Food("Granola bar", "Probably the most exciting thing I'll eat today", 120),
    new Food("Sandwich", "Yumm", 256),
    new Food("Yogurt", "Inferior cousin of Gogurt", 217),
    new Food("Lasagna", "Something to balance out those carrots", 690),
  ]
}
