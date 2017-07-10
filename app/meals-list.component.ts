import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: "meals-list",
  template: `
  <div>
  <select (change)="onChange($event.target.value)">
  <option value="all" selected="selected">Show All</option>
  <option value="highCalories">High Calories</option>
  <option value="lowCalories">Low Calories</option>

  </select>
  </div>

  <div class="well" class="col-md-6" *ngFor= "let currentMeal of childMealList |completeness: selectedCalories">
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
  public selectedCalories: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
