




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedbacksub',
  templateUrl: './feedbacksub.component.html',
  styleUrls: ['./feedbacksub.component.scss']
})
export class FeedbacksubComponent implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      anonymousFeedback: [false],
      studentName: [{ value: '', disabled: true }, [Validators.pattern('[a-zA-Z ]*')]],
      instructorName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      courseName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      contentRelevance: [''],
      knowledgeable:[''],
      trainingMaterialExpectations:[''],
      clearMaterials: [''],
      valuableTopics: [''],
      missingContent: [''],
      wellStructured: [''],
      instructorKnowledge: [''],
      instructorEngagement: [''],
      clearExplanations: [''],
      appropriateMethods: [''],
      technicalIssues: ['']
    }, { validators: this.atLeastFourFieldsValidator });

    // Listen to changes in the 'anonymousFeedback' control
    this.feedbackForm.get('anonymousFeedback')?.valueChanges.subscribe((value) => {
      if (value) {
        this.feedbackForm.get('studentName')?.clearValidators();
        this.feedbackForm.get('studentName')?.disable();
      } else {
        this.feedbackForm.get('studentName')?.setValidators([Validators.required, Validators.pattern('[a-zA-Z ]*')]);
        this.feedbackForm.get('studentName')?.enable();
      }
      this.feedbackForm.get('studentName')?.updateValueAndValidity();
    });
  }



  onSubmit() {
    if (this.feedbackForm.valid) {
      this.http.post<any>('http://localhost:3000/feedbacks', this.feedbackForm.value)
        .subscribe(
          response => {
            // Handle success: navigate to admin page or show success message
            console.log('Form submitted successfully:', response);
          },
          error => {
            // Handle error
            console.error('Error submitting form:', error);
          }
        );
    }
  }
  onReset() {
    this.feedbackForm.reset();
  }

  // Custom validator to check if at least four fields are filled
  atLeastFourFieldsValidator(formGroup: FormGroup) {
    let fieldsFilled = 0;
    Object.keys(formGroup.controls).forEach(control => {
      const formControl = formGroup.get(control);
      if (formControl && formControl.value !== null && formControl.value !== '') {
        fieldsFilled++;
      }
    });
    return fieldsFilled >= 5 ? null : { atLeastFourFields: true };
  }
  updateErrorMessage(controlName: string): void {
    const control = this.feedbackForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  isErrorMessageVisible(controlName: string): boolean {
    const control = this.feedbackForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }
}
