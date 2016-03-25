import { Component } from 'angular2/core';
import { Food } from './food.model';
import {DayListComponent} from './day-list.component';

@Component({
  selector: 'my-app',
  directives: [DayListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <hr>
    <day-list [allFoodsList]="foodList"></day-list>
  </div>
    `
})

export class AppComponent {
  public foodList: Food[] = [
    new Food("Oatmeal", "Tasted like oatmeal", 160, 'monday'),
    new Food("Apple", "Kept the doctor away", 95, 'monday'),
    new Food("Carrots", "Healthiest thing I'll ever eat", 48, 'monday'),
    new Food("Granola bar", "Probably the most exciting thing I'll eat today", 120, 'monday'),
    new Food("Sandwich", "Yumm", 256, 'monday'),
    new Food("Yogurt", "Inferior cousin of Gogurt", 217, 'monday'),
    new Food("Lasagna", "Something to balance out those carrots", 690, 'monday'),
  ]
}
