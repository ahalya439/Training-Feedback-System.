import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-feedback',
  templateUrl: './generate-feedback.component.html',
  styleUrl: './generate-feedback.component.scss'
})
export class GenerateFeedbackComponent {

  courses: any[] = [
    { name: 'PHP', image: 'php.png', alt: 'PHP Image' },
    { name: 'JavaScript', image: 'c1.png', alt: 'JavaScript Image' },
    { name: 'Artificial Intelligence', image: 'c9.png', alt: 'AI Image' },
    { name: 'Cyber Security', image: 'c8.png', alt: 'Cyber Security Image' },
    { name: 'Big Data Analytics', image: 'c7.png', alt: 'Big Data Image' },
    { name: 'Data Science', image: 'c6.png', alt: 'Data Science Image' }
  ];

  constructor() {}
}