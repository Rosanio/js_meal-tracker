import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'calorie-calculator',
  inputs: ['calories'],
  template: `
    <div class="calorieForms">
      <h2>How many calories should you eat per day?</h2>
      <h4>Enter your weight and activity level...</h4>
      <input type="number" placeholder="Weight (lbs)" class="form-control" #userWeight>
      <select class="form-control" #userActivity>
        <option value="12">I don't get out much</option>
        <option value="13">I work out three times a week</option>
        <option value="14">I do P90x every day</option>
      </select>
      <h4>...or specify how many calories you want to eat!</h4>
      <input type="number" placeholder="Calories" class="form-control" #userCalories>
      <h4>Finally, what body type are you looking for?</h4>
      <select class="form-control" #userHealthDesires>
        <option value="loseWeight">I want to lose weight</option>
        <option value="staySame" selected="selected">I'm happy just the way I am</option>
        <option value="getBuff">I want to get ripped</option>
      </select>
      <button class="btn btn-primary" (click)="calculateCalories(userWeight, userActivity, userCalories, userHealthDesires)">Go!</button>
    </div>
    <div class="caloriesPerDay" *ngIf="calculatedCalories">
      <h3>You should eat {{caloriesPerDay}} calories per day!</h3>
      <h3>{{healthMessage}}</h3>
    </div>
  `
})

export class CalorieCalculatorComponent {
  public calories: number;
  public calculatedCalories: boolean = false;
  public caloriesPerDay: number;
  public healthMessage: string;
  calculateCalories(weight: HTMLInputElement, activity: HTMLSelectElement, calories: HTMLInputElement, healthDesires: HTMLSelectElement) {

    //Determine what information to use, depending on what was entered into form

    if(calories.value.length > 0) {
      this.caloriesPerDay = parseInt(calories.value);
      this.calculatedCalories = true;
    } else if (weight.value.length > 0) {
      //Calculate calories based on weight and activity level
      this.caloriesPerDay = parseInt(weight.value)*parseInt(activity.value);
      this.calculatedCalories = true;
    } else {
      alert("Please enter either your weight or specify a number of calories");
    }

    //Apply modifiers depending on health desires and min calorie intake

    if(this.calculateCalories) {
      if(healthDesires.value === "loseWeight") {
        this.caloriesPerDay -= 500;
      } else if (healthDesires.value === "getBuff") {
        this.caloriesPerDay += 300;
      }
      if(this.caloriesPerDay < 1200) {
        this.caloriesPerDay = 1200;
      }

      //Display appropriate health message

      if(this.calories < this.caloriesPerDay) {
        this.healthMessage = "Looks like you could afford to eat a bit more!";
      } else if (this.calories === this.caloriesPerDay) {
        this.healthMessage = "You're absolutely perfect doing what you're doing. Are you sure you didn't cheat?";
      } else {
        //If weight was entered, apply formula to calculate number of miles which should be run or walked
        if(weight.value.length > 0) {
          var calsPerMileRunning = 0.63*parseInt(weight.value);
          var calsPerMileWalking = 0.3*parseInt(weight.value);
          var milesRunning = (this.calories-this.caloriesPerDay)/calsPerMileRunning;
          var milesWalking = (this.calories-this.caloriesPerDay)/calsPerMileWalking;
          this.healthMessage = "You should get more exercise. Try running for " + Math.round((milesRunning)*100)/100 + " miles or walking for " +  Math.round((milesWalking)*100)/100 + " miles.";
        } else {
          this.healthMessage = "You should get more exersise. Enter your weight for a more detailed analysis.";
        }
      }
    }
  }
}
