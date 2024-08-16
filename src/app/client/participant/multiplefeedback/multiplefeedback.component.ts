import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplefeedback',
  templateUrl: './multiplefeedback.component.html',
  styleUrl: './multiplefeedback.component.scss'
})
export class MultiplefeedbackComponent {
  newFeedback = [
    { name: 'feedback-7', link: 'feedback sub.html', date: '3/01/2024' },
    { name: 'feedback-6', link: 'feedback sub.html', date: '3/01/2024' }
  ];

  existingFeedback = [
    { name: 'feedback-5',  date: '9/12/2023', title: 'Filled feedback -5' },
    { name: 'feedback-4',  date: '2/12/2023', title: 'Filled feedback -4' },
    { name: 'feedback-3',  date: '2/11/2023', title: 'Filled feedback -3' },
    { name: 'feedback-2',  date: '2/10/2023', title: 'Filled feedback -2' },
    { name: 'feedback-1',  date: '2/09/2023', title: 'Filled feedback -1' }
  ];

  constructor() {}

}
