import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component ({
  selector: 'day-list',
  inputs: ['allFoodsList'],
  directives: [FoodListComponent],
  template: `
    <div class="weekRow">
      <div class="sunday weekDay" [class.selected]="selectedDay==='sunday'" (click)="clickDay('sunday')">
        Sunday
      </div>
      <div class="monday weekDay" [class.selected]="selectedDay==='monday'" (click)="clickDay('monday')">
        Monday
      </div>
      <div class="tuesday weekDay" [class.selected]="selectedDay==='tuesday'" (click)="clickDay('tuesday')">
        Tuesday
      </div>
      <div class="wednesday weekDay" [class.selected]="selectedDay==='wednesday'" (click)="clickDay('wednesday')">
        Wednesday
      </div>
      <div class="thursday weekDay" [class.selected]="selectedDay==='thursday'" (click)="clickDay('thursday')">
        Thursday
      </div>
      <div class="friday weekDay" [class.selected]="selectedDay==='friday'" (click)="clickDay('friday')">
        Friday
      </div>
      <div class="saturday weekDay" [class.selected]="selectedDay==='saturday'" (click)="clickDay('saturday')">
        Saturday
      </div>
    </div>
    <br>
    <food-list [foodList]="dayFoodList" [selectedDay]="selectedDay" (onSubmitNewFood)="addNewFood($event)" *ngIf="selectedDay"></food-list>
  `
})

export class DayListComponent {
  public allFoodsList: Food[];
  public dayFoodList: Food[];
  public selectedDay: string;
  clickDay(clickedDay: string) {
    this.dayFoodList = [];
    if(this.selectedDay === clickedDay) {
      this.selectedDay = undefined;
    } else {
      this.selectedDay = clickedDay;
      for(var i = 0; i < this.allFoodsList.length; i++) {
        if(this.allFoodsList[i].day === this.selectedDay) {
          this.dayFoodList.push(this.allFoodsList[i])
        }
      }
    }
  }
  addNewFood(foodArray: Array<any>) {
    this.allFoodsList.push(new Food(foodArray[0], foodArray[1], foodArray[2], this.selectedDay));
    this.dayFoodList.push(new Food(foodArray[0], foodArray[1], foodArray[2], this.selectedDay));
  }
}
