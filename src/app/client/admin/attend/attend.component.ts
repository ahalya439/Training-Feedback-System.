import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceService } from '../../../service/attendance.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.scss'], 
})
export class AttendComponent {
  attendanceData: any[] = [];
  searchYear!: number;
  searchMonth!: number;
  searchWeek!: number;
  tableHeaders: string[] = ['S.No', 'Name'];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.searchYear = 2023;
    this.searchMonth = 1;
    this.searchWeek = 1;

    this.fetchAttendanceData();
  }

  updateTableHeaders(): void {
    const startDate = new Date(this.searchYear, this.searchMonth - 1, 1);
    const firstDayOfWeek = new Date(
      startDate.getTime() + (this.searchWeek - 1) * 7 * 24 * 60 * 60 * 1000
    );

    const headerDates: string[] = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(
        firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000
      );
      const formattedDate = this.formatDate(currentDate);
      headerDates.push(formattedDate);
    }

    this.tableHeaders = ['S.No', 'Name', ...headerDates];
  }

  // Function to format date to "DD/MM/YYYY"
  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  fetchAttendanceData(): void {
    this.attendanceService
      .getAttendance(this.searchYear, this.searchMonth, this.searchWeek)
      .subscribe((data) => {
        this.attendanceData = data;
        this.updateTableHeaders();
      });
  }
}
