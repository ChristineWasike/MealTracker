import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf = "childSelectedMeal">
  <h1>Edit Meal</h1>
  <div>
  <label > Enter Food Type:</label>
  <input [(ngModel)]= "childSelectedMeal.type">
  </div>

  <div>
  <label >Enter Description:</label>
  <input [(ngModel)]= "childSelectedMeal.content">
  </div>

  <div>
  <label > Enter Calories:</label>
  <input [(ngModel)]= "childSelectedMeal.price">
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
