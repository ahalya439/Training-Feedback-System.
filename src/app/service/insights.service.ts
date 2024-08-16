import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root' // This registers the service with the root injector
  })
  export class InsightsService {
    private baseUrl = 'http://localhost:3000/insights';
  
    constructor(private http: HttpClient) {}
  
    getInsights(): Observable<any[]>  {
      return this.http.get<any[]>(this.baseUrl);
    }
  
    addInsights(insights: any) {
      return this.http.post<any>(this.baseUrl, insights);
    }
  
    // Add more methods for updating, deleting, etc. if needed
  }