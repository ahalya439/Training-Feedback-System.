import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements AfterViewInit {
    @ViewChild('feedbackChart') chartRef!: ElementRef;
    sessions: string[] = ["Php", "Javascript", "Artificial Intelligence", "Data Science"];
    satisfactionScores: number[] = [];
    knowledgeGainedScores: number[] = [];
    trainerEffectivenessScores: number[] = [];
    chart: any;

    constructor() { }

    ngAfterViewInit(): void {
      this.generateRandomData();
      this.createChart();
    }

    generateRandomData(): void {
      this.satisfactionScores = this.sessions.map(session => Math.random() * 5);
      this.knowledgeGainedScores = this.sessions.map(session => Math.random() * 5);
      this.trainerEffectivenessScores = this.sessions.map(session => Math.random() * 5);
    }

    createChart(): void {
      const ctx = this.chartRef.nativeElement.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.sessions,
          datasets: [
            {
              label: 'Satisfaction',
              data: this.satisfactionScores,
              backgroundColor: 'blue',
              borderColor: 'blue',
              tension: 0.4
            },
            {
              label: 'Knowledge Gained',
              data: this.knowledgeGainedScores,
              backgroundColor: 'green',
              borderColor: 'green',
              tension: 0.4
            },
            {
              label: 'Trainer Effectiveness',
              data: this.trainerEffectivenessScores,
              backgroundColor: 'orange',
              borderColor: 'orange',
              tension: 0.4
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                max: 5
              }
            }]
          }
        }
      });
    }
  }
