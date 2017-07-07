import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: "meals-list",
  template: `
  <div class="col-md-lg-xs-6" *ngFor= "let currentMeal of childMealList">
  <h3>{{currentMeal.name}}</h3>
  <h5>{{currentMeal.details}}</h5>
  <h5>{{currentMeal.calories}}</h5>

  <button class="btn btn-sucess"(click) = "editButtonHasBeenClicked (currentMeal)">Edit</button>
  </div>

  `
})

export class MealsListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
