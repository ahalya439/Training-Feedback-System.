





import { Component } from '@angular/core';
declare var $: any;
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

interface TableItem {
  id:number,
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
      selector: 'app-reportt',
      templateUrl: './reportt.component.html',
      styleUrl: './reportt.component.scss'
    })

          

  export class ReporttComponent {
    filteredData: TableItem[] = [];
    filterValue: string = '';
   
    items: TableItem[] = [ ];
    constructor( private http: HttpClient){}
    
    ngOnInit(): void {
      this.fetchData();
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
    filterTable() {
      this.filteredData = this.items.filter(item =>
        item.question5228.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
  
    
    exportToExcel(): void {
      const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const fileExtension = '.xlsx';
      const fileName = 'feedback_data';
      
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.items);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data: Blob = new Blob([excelBuffer], {type: fileType});
  
      saveAs(data, fileName + fileExtension);
    }

    
  }
  