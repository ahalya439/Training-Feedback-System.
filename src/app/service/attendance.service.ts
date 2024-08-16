import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = 'http://localhost:3000/attendance';

  constructor(private http: HttpClient) {}

  // getAttendance(): Observable<any> {
  //   return this.http.get(this.apiUrl); }

  getAttendance(year: number, month: number, week: number): Observable<any> {
    const url = `${this.apiUrl}?year=${year}&month=${month}&week=${week}`;
    return this.http.get<any>(url);
  }
}


