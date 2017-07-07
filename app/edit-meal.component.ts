import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf = "childSelectedMeal">
  <h1>Edit Meal</h1>
  <div class="form-group">
  <input placeholder=" Enter Food Type" [(ngModel)]= "childSelectedMeal.name">
  </div>

  <div class="form-group">
  <input placeholder="Enter Description" [(ngModel)]= "childSelectedMeal.details">
  </div>

  <div class="form-group">
  <input type="number" placeholder="Enter Calories" [(ngModel)]= "childSelectedMeal.calories">
  <button class="btn btn-success" (click) ="doneClicked()">Done</button>
  </div>

  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
