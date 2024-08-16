import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../../admin/question/question.model';

import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-pastfeedback',
  templateUrl: './pastfeedback.component.html',
  styleUrl: './pastfeedback.component.scss',
})
export class PastfeedbackComponent {
  questions: any[] = [];
  textResponses: { [key: string]: { response: string } } = {};
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuestions();
    this.initializeForm();
  }

  loadQuestions() {
    this.http.get<any>('http://localhost:3000/questions').subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.log('Error fetching questions:', error);
      }
    );
  }

  initializeForm() {
    
    this.feedbackForm = this.fb.group(
      {
        anonymousFeedback: [false],
        question595b: [
          { value: '', disabled: true },
          [Validators.pattern('[a-zA-Z ]*')],
        ],
        question5228: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
        ],
        question3435: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
        ],

        question5585: [''],
        question4ebb: [''],
        questioncdbe: [''],
        question82da: [''],
        question8684: [''],
        question5aff: [''],
        questionf9f3: [''],
        question3269: [''],
        questionedc5: [''],
        question52d0: [''],
        clearExplanations: [''],
        appropriateMethods: [''],
        technicalIssues: [''],
      },
      { validators: this.atLeastFourFieldsValidator }
    );
    this.setupFormControls();

    this.feedbackForm
      .get('anonymousFeedback')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          this.feedbackForm.get('question595b')?.clearValidators();
          this.feedbackForm.get('question595b')?.disable();
        } else {
          this.feedbackForm
            .get('question595b')
            ?.setValidators([
              Validators.required,
              Validators.pattern('[a-zA-Z ]*'),
            ]);
          this.feedbackForm.get('question595b')?.enable();
        }
        this.feedbackForm.get('question595b')?.updateValueAndValidity();
      });
  }
  atLeastFourFieldsValidator(formGroup: FormGroup) {
    let fieldsFilled = 0;
    Object.keys(formGroup.controls).forEach((control) => {
      const formControl = formGroup.get(control);
      if (
        formControl &&
        formControl.value !== null &&
        formControl.value !== ''
      ) {
        fieldsFilled++;
      }
    });
    return fieldsFilled >= 8 ? null : { atLeastFourFields: true };
  }

  setupFormControls() {
    this.questions.forEach((question) => {
      const formControlName = 'question' + question.id;
      const formControl = new FormControl('');
      this.feedbackForm.addControl(formControlName, formControl);
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.http
        .post<any>('http://localhost:3000/feedbacks', this.feedbackForm.value)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully:', response);
          },
          (error) => {
            console.error('Error submitting form:', error);
          }
        );
      this.feedbackForm.reset();
      console.log('Form data:', this.feedbackForm.value);
    } else {
      console.log('Form is invalid. Cannot submit.');
    }
  }

  resetForm() {
    this.feedbackForm.reset(); // Reset the form
  }
}
