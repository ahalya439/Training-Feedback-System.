import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { HttpClient } from '@angular/common/http';
interface TableItem {
  id: number;
  anonymousFeedback: [false],
  question595b: string,
  question5228: string,
  question3435: string,
  question5585 : string,
 
  question4ebb: string,
  questioncdbe : string,
  question82da: string,
  
  question8684: string,
  question5aff: string,
  questionf9f3: string,
  question3269: string,
  questionedc5: string,
  question52d0: string,
   
}
@Component({
  selector: 'app-rep',
  templateUrl: './rep.component.html',
  styleUrls: ['./rep.component.scss']
})
export class RepComponent implements OnInit {
  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
     
      this.filterTable(); 
      this.setupLineChart();
      this.fetchData();
    
  }
filteredData: any[] = [];


filterValue: string = '';

items:TableItem[] = [ ]


setupLineChart(): void {
  const lineChart = new Chart('lineChart', {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Training Satisfaction',
        data: [5, 4, 3, 5, 4, 5, 4], 
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Training Improvements',
        data: [2, 3, 4, 3, 2, 3, 4], 
        borderColor: 'green',
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Months'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Rating'
          },
          suggestedMin: 0,
          suggestedMax: 5
        }
      }
    }
  });
}

fetchData() {
  this.http.get<any[]>('http://localhost:3000/feedbacks')
    .subscribe(
      data => {
        this.items = data;
      },
      error => {
        // Handle error
      }
    );
}

filterTable(): void {
  this.filteredData = this.items.filter(item =>
    item.question5228.toLowerCase().includes(this.filterValue.toLowerCase())
  );
}
}