import { Component, OnInit } from '@angular/core';
import { InsightsService } from '../../../service/insights.service';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrl: './insight.component.scss',
})
export class InsightComponent implements OnInit {
  tableData: any[] = [];
  positiveAspects: string[] = [];
  areasForImprovement: string[] = [];
  suggestions: string[] = [];
  questions: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any>('http://localhost:3000/insights').subscribe(
      (data) => {
        this.tableData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
