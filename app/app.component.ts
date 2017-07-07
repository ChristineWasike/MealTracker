import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'food',
  template: `
<div class= "container">
<h1>Your Meal Tracker</h1>
<h2>Mindfulness, not calories, is the key.</h2>
<meals-list
[childMealList]= "masterMealList"
(clickSender)="showDetails($event)">
</meals-list>
<edit-meal
[childSelectedMeal]="selectedMeal"
(doneClickedSender)="finishedEditing()"
></edit-meal>

</div>
  `
})

export class AppComponent {
  // public masterMealList: Meal[] = [
  //   new Meal("Fries", "fooood", 7)
  //
  // ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }

}
