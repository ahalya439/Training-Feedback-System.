import { Component , OnInit, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { studentdata } from './user-management.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  
  emailErrorMessage: string = '';
 //hide
 showadd!: boolean;
 showupdate!: boolean;
 studentmodelobj:studentdata=new studentdata
 formValue!: FormGroup
 allstudentdata:any;



 constructor(private formBuilder: FormBuilder,private api:ApiService,private renderer: Renderer2,private modalService: NgbModal) { }

 ngOnInit(): void {
  this.formValue = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4,}[0-9]*@[a-zA-Z0-9.-]+\.(org|in|com)$')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    user: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    department: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    date: ['', Validators.required],
    status: ['', Validators.required],
  });
   this.getdata()
 }
 


 //to hide on add
 add() {
   this.showadd = true;
   this.showupdate = false;
 }
  // to hide on edit button
 edit(data:any) {
   this.showadd = false;
   this.showupdate = true;
   this.studentmodelobj.id = data.id;
   if (this.formValue) {
    this.formValue.controls['department'].setValue(data.department)
    this.formValue.controls['date'].setValue(data.date)
    this.formValue.controls['status'].setValue(data.status)
 this.formValue.controls['name'].setValue(data.name)
 this.formValue.controls['email'].setValue(data.email)
 this.formValue.controls['password'].setValue(data.password)
 this.formValue.controls['user'].setValue(data.user)


 }
 this.closeModal();}


//update on edit
update(){
 this.studentmodelobj.name = this.formValue.value.name;
 this.studentmodelobj.email= this.formValue.value.email;
 this.studentmodelobj.password= this.formValue.value.password;
 this.studentmodelobj.user=this.formValue.value.user;
 this.studentmodelobj.department  =this.formValue.value.department;
 this.studentmodelobj.date=this.formValue.value.date;
 this.studentmodelobj.status  =this.formValue.value.status;


 this.api.updatestudent(this.studentmodelobj,this.studentmodelobj.id).subscribe(res=>{
   this.formValue.reset();
   this.getdata();
   const modalElement = document.getElementById('updateSuccessModal');
   if (modalElement) {
     modalElement.classList.add('show');
     modalElement.style.display = 'block';
  this.closeModal();}
 },
 err=>{
alert("something went wrong")
 })
   }
 addstudent(){
 
   this.studentmodelobj.name = this.formValue.value.name;
   this.studentmodelobj.email = this.formValue.value.email;

   this.studentmodelobj.password= this.formValue.value.password;
   this.studentmodelobj.user=this.formValue.value.user;
   this.studentmodelobj.department= this.formValue.value.department;
   this.studentmodelobj.date= this.formValue.value.date;
   this.studentmodelobj.status  =this.formValue.value.status;


   
   this.api.poststudent(this.studentmodelobj).subscribe(res=>{
    console.log(res)
     this.formValue.reset()
 this.getdata();
   
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    this.closeModal();}
   },
err=>{
  const modalElement = document.getElementById('errorModal');
  if (modalElement) {
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
}})
 }

//getdata to render 
getdata(){
 this.api.getstudent()
 .subscribe(res=>{
   this.allstudentdata=res;
 })
}

resetForm() {
  this.formValue.reset() 
}
//delete



recordToDelete: any;
deletestud(data: any) {
  this.recordToDelete = data;
}

confirmDeletion() {
  this.api.deletestudent(this.recordToDelete.id)
    .subscribe(() => {
      this.getdata();
      this.recordToDelete = null;
     
      this.closeeModal(); // Clear the recordToDelete after successful deletion
    });}
   
    
    
    
    closeModal() {
      const modal = document.getElementById('exampleModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
       
        setTimeout(() => {
          document.body.classList.remove('modal-open');

          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop && modalBackdrop.parentNode) { // Check if modalBackdrop and parentNode are not null
            modalBackdrop.parentNode.removeChild(modalBackdrop);
          }
        }, 100);         }
      }



      closeeModal() {
        const modal = document.getElementById('deleteConfirmationModal');
        if (modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
              
          setTimeout(() => {
            document.body.classList.remove('modal-open');
  
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop && modalBackdrop.parentNode) { // Check if modalBackdrop and parentNode are not null
              modalBackdrop.parentNode.removeChild(modalBackdrop);
            }
          }, 100);           }
        }
      }
    

    


