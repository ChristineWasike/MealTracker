import { Component, Output, EventEmitter} from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="col-md-12">
    <h1>New Meal</h1>
    <div class="form-group">
    <input #newMeal placeholder="Food type">
    </div>
    <div class="form-group">
      <input #newDetails placeholder="Short Description">

      </div>
      <div class="form-group">

      <input type="number" #newCalories placeholder="Enter calories">
      <button class="btn btn-info" (click) = "addClicked(newMeal.value, newDetails.value, newCalories.value);
        newMeal.value='';
        newDetails.value='';
        newCalories.value=''

      ">Add</button>
      </div>
      </div>
  `
})

// export class NewMealComponent {
//   @Output() newMealSender = new EventEmitter();
//   addClicked(name: string, details: string, calories: number) {
//     var newMealToAdd: Meal = new Meal(name, details, calories);
//     this.newMealSender.emit(newMealToAdd);
//   }
//
// }


export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
