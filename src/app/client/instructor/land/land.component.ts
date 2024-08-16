import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss'] // Change styleUrl to styleUrls
})
export class LandComponent implements OnInit {
  OngoingCourses: any[] = [
    { 
      title: 'Php', 
      image: '../assets/images/php.png', 
      imageClass: 'c3', 
      trainer: 'Mrs. S.Venba', 
      startDate: '19/01/2024', 
      duration: '100hrs' 
    },
    { 
      title: 'Java Script', 
      image: '../assets/images/c1.png', 
      imageClass: 'c1', 
      trainer: 'Mrs. S.yazhini', 
      startDate: '20/01/2024', 
      duration: '100hrs' 
    },
    { 
      title: 'Artificial Intelligence', 
      image: '../assets/images/c9.png', 
      imageClass: 'c2', 
      trainer: 'Mrs. S.priya', 
      startDate: '21/01/2024', 
      duration: '100hrs' 
    }
  ];

  UpcomingCourses: any[] = [
    { 
      title: 'Cyber Security', 
      image: '../assets/images/c8.png', 
      imageClass: 'c3', 
      trainer: 'Mrs. S.Venba', 
      startDate: '22/12/2024', 
      duration: '100hrs' 
    },
    { 
      title: 'Big Data Analytics', 
      image: '../assets/images/c7.png', 
      imageClass: 'c1', 
      trainer: 'Mrs. S.Venilla', 
      startDate: '22/12/2024', 
      duration: '100hrs' 
    },
    { 
      title: 'Data Science', 
      image: '../assets/images/c6.png', 
      imageClass: 'c2', 
      trainer: 'Mrs. S.Megna', 
      startDate: 'Ongoing', 
      duration: '100hrs' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
