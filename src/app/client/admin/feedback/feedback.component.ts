


import { Component,ViewChild,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  positiveAspects:string[]=[];
  areasForImprovement: string[] = [];
  suggestions: string[] = [];
  questions: string[] = [];
  filteredData: any[] = [];
  filterValue: string = '';
  
  tableData: any[] = [];
  showSuccessModal: boolean = false;
  insightsForm: FormGroup = new FormGroup({});



  
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
    

    this.insightsForm = this.formBuilder.group({
      positiveAspects: ['', [Validators.required, this.noNumberValidator(), 
        this.noSpecialCharacterValidator(), Validators.minLength(5)]],
      areasForImprovement: ['', [Validators.required, this.noNumberValidator(), this.noSpecialCharacterValidator(), Validators.minLength(5)]],
      suggestions: ['', [Validators.required, this.noNumberValidator(), this.noSpecialCharacterValidator(), Validators.minLength(5)]],
      questions: ['', [Validators.required, this.noNumberValidator(), this.noSpecialCharacterValidator(), Validators.minLength(5)]]
    });
  }



  fetchData() {
    this.http.get<any[]>('http://localhost:3000/feedbacks')
      .subscribe(
        data => {
          this.tableData = data;
        },
        error => {
    
        }
      );
  }
  

  onSubmit() {
    if (this.insightsForm.valid) {
      const formData = {
        ...this.insightsForm.value,
        dateSent: new Date().toISOString()  // Include the current date
      };

      this.http.post<any>('http://localhost:3000/insights', formData)
        .subscribe(
          response => {
            console.log('Form submitted successfully:', response);
            this.insightsForm.reset();  // Reset form after successful submission
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    }
  }


  closeModal() {
    this.showSuccessModal = false; 
    this.insightsForm.reset();
  }

  

  clearForm() {
    this.insightsForm.reset();
  }
  noNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (/\d/.test(control.value)) {
        return { noNumber: true };
      }
      return null;  
    };
  }
  noSpecialCharacterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!/^[a-zA-Z0-9 ]*$/.test(control.value)) {
        return { noSpecialCharacter: true };
      }
      return null;
    };
  }

  @ViewChild('insightsForm') insightsFormViewChild!: NgForm;

  isFirstDropdownOpen: boolean = false;
  isSecondDropdownOpen: string = '';


  

  closeDropdowns(): void {
    this.isFirstDropdownOpen = false;
    this.isSecondDropdownOpen = '';
}


 
  toggleSecondDropdown(dropdownName: string): void {
    this.isSecondDropdownOpen = this.isSecondDropdownOpen === dropdownName ? '' : dropdownName;
  }
  exportToExcel(): void {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const fileName = 'feedback_data';
        
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tableData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
        const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data: Blob = new Blob([excelBuffer], {type: fileType});
    
        saveAs(data, fileName + fileExtension);
      }
   

  filterTable() {
    this.filteredData = this.tableData.filter(item => {
      return item.question5228.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }
}






















