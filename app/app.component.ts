import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'food',
  template: `
<div class= "container">
<div style="text-align:center; box-shadow: 5px 5px 2.5px #888888" >
<h1>Your Meal Tracker</h1>
<h2>Mindfulness, not calories, is the key.</h2>
</div>
<meals-list
[childMealList]= "masterMealList"
(clickSender)="showDetails($event)">
</meals-list>
<edit-meal [childSelectedMeal]="selectedMeal"
(doneClickedSender)="finishedEditing()"
>


</edit-meal>
<new-meal
(newMealSender) = "addMeal($event)"
></new-meal>

</div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
