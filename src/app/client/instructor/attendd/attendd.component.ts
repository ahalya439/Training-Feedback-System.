import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-attendd',
  templateUrl: './attendd.component.html',
  styleUrls: ['./attendd.component.scss'], 
})
export class AttenddComponent {


  numberOfAbsent: number = 0;
  selectedYear: number;
  selectedMonth: number;
  selectedWeek: number;
  
  constructor(private http: HttpClient) {
    
    this.selectedYear = 2023;
    this.selectedMonth = 1;
    this.selectedWeek = 1;
  }
  updateTableHeader(): void {
    const tableHeaderRow = document.querySelector('#attendanceTable thead tr');

    if (tableHeaderRow) {
     
        tableHeaderRow.innerHTML = '';

        const snoColumn = document.createElement('th');
        snoColumn.textContent = 'S.NO';
        tableHeaderRow.appendChild(snoColumn);

        const nameColumn = document.createElement('th');
        nameColumn.textContent = 'Name';
        tableHeaderRow.appendChild(nameColumn);

        // Calculate the starting and ending dates of the selected week
        const selectedDate = new Date(this.selectedYear, this.selectedMonth - 1, 1); 
        const firstDayOfMonth = selectedDate.getDay();
        const startingOffset = (this.selectedWeek - 1) * 7 + (1 - firstDayOfMonth); 
        const startDate = new Date(this.selectedYear, this.selectedMonth - 1, startingOffset);
        const endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000); 

        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const dateColumn = document.createElement('th');
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            dateColumn.textContent = dateString;
            tableHeaderRow.appendChild(dateColumn);
        }
        const absentDaysColumn = document.createElement('th');
        absentDaysColumn.textContent = 'No.of.days absent';
        tableHeaderRow.appendChild(absentDaysColumn);
    } else {
        console.error('Unable to find table header row');
    }
}





updateCellColor(event: any) {
    const selectedOption = event.target.value;
    const cell = event.target.parentElement; 
    const row = cell.parentElement;
    
    if (selectedOption === 'absent') {
        cell.style.backgroundColor = 'red';
        this.updateNumberOfAbsentDays(row);
          } else {
        cell.style.backgroundColor = ''; 
        
        this.updateNumberOfAbsentDays(row); 
        
    }
}

updateNumberOfAbsentDays(row: any) {
    let numberOfAbsentDays = 0;
    const selects = row.querySelectorAll('select[name^="attendanceStatus"]');
    selects.forEach((select: any) => {
        if (select.value === 'absent') {
            numberOfAbsentDays++;
        }
    });

    const numberOfAbsentDaysSelect = row.querySelector('select[name^="number"]');
    if (numberOfAbsentDaysSelect) {
        numberOfAbsentDaysSelect.value = numberOfAbsentDays.toString();
    }
}
saveAttendance() {
  interface RowData {
    [key: string]: string | string[];
  }
  
  const attendanceData = {
    year: this.selectedYear,
    month: this.selectedMonth,
    week: this.selectedWeek,
    tableData: [] as RowData[]  // Define type for tableData
  };
  
 
  
  document.querySelectorAll('#attendanceTable tbody tr').forEach((row, index) => {
    const rowData: RowData = {
      [`name${index + 1}`]: ((row as HTMLTableRowElement).cells[1].textContent ?? '').trim(),
      [`attendance${index + 1}`]: [] as string[]
    };
    
  
    
    const selectTagName = (row.querySelector('select[name^="attendanceStatus"]') as HTMLSelectElement)?.name;
    const attendanceStatus = selectTagName ? selectTagName.replace('attendanceStatus', '') : '';
 
    
    row.querySelectorAll(`select[name^="attendanceStatus${attendanceStatus}"]`).forEach(select => {
      (rowData[`attendance${index + 1}`] as string[]).push((select as HTMLSelectElement).value);
    });
    
    attendanceData.tableData.push(rowData);
  });

  console.log(attendanceData);
  this.http.post('http://localhost:3000/attendance', attendanceData).subscribe(
    (response) => {
      console.log('Attendance saved successfully:', response);
      },
    (error) => {
      console.error('Error saving attendance:', error);
      
    }
  );
}


}