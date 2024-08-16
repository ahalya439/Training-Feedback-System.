import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-feedback',
  templateUrl: './multi-feedback.component.html',
  styleUrl: './multi-feedback.component.scss'
})
export class MultiFeedbackComponent {
  feedbacks: any[]; 

  constructor() {
  
    this.feedbacks = [
      { id: 1, name: 'feedback-4', date: '2/09/2023' },
      { id: 2, name: 'feedback-3', date: '2/09/2023' },
      { id: 3, name: 'feedback-2', date: '2/09/2023' },
      { id:  4, name: 'feedback-1', date: '2/09/2023' }
    ];
  }
}
