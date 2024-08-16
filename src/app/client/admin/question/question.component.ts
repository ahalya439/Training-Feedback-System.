import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { QuestionService } from '../../../service/question.service';
import { Question } from './question.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import $ from 'jquery';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  questionForm!: FormGroup; 
  questions: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.questionForm = this.formBuilder.group({
      title: [''],
      question: ['', Validators.required],
      questionType: ['', Validators.required],
      options: [''],
      textInput: [''], 
    });
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form data:', this.questionForm.value);
    } else {
      this.questionForm.markAllAsTouched();
    }
  }

  cancelForm(): void {
    this.questionForm.reset();
  }

  addQuestion(): void {
    if (this.questionForm.valid) {
      const titleControl = this.questionForm.get('title');
      const questionControl = this.questionForm.get('question');
      const questionTypeControl = this.questionForm.get('questionType');

      if (questionControl && questionTypeControl) {
        const question = questionControl.value;
        const questionType = questionTypeControl.value;
          // Create a title element 
        let title = '';

        if (titleControl) {
          title = titleControl.value;
        }

        if (title) {
          const hrElement = document.createElement('hr');
        
          const titleElement = document.createElement('h3');
          titleElement.textContent = title;
          document
            .getElementById('questionsContainer')
            ?.appendChild(titleElement);
        }

        if (questionTypeControl && questionControl) {
          const questionsContainer =
            document.getElementById('questionsContainer');
          if (questionsContainer) {
            const questionLabel = document.createElement('label');
            questionLabel.textContent = questionControl.value + ': ';
            questionsContainer.appendChild(questionLabel);

            const lineBreak = document.createElement('br');
            questionsContainer.appendChild(lineBreak);

            if (questionTypeControl.value === 'text') {
              const textInputField = document.createElement('input');
              textInputField.setAttribute('type', 'text');
              textInputField.setAttribute('class', 'form-control mb-3');
              textInputField.setAttribute('placeholder', 'Enter Text');
              questionsContainer.appendChild(textInputField);
            } else if (
              questionTypeControl.value === 'radio' ||
              questionTypeControl.value === 'checkbox' ||
              questionTypeControl.value === 'text'
            ) {
               const options = this.questionForm
                .get('options')
                ?.value.split(',');
              if (options) {
                options.forEach((option: string) => {
                  const inputType =
                    questionTypeControl.value === 'radio'
                      ? 'radio'
                      : questionTypeControl.value === 'multi choice'
                      ? 'checkbox'
                      : 'checkbox';

                  const inputField = document.createElement('input');
                  inputField.setAttribute('type', inputType);
                  inputField.setAttribute(
                    'name',
                    inputType === 'radio'
                      ? 'radioOptions'
                      : questionTypeControl.value === 'multi choice'
                      ? 'multiChoiceOptions'
                      : 'checkboxOptions'
                  );
                  inputField.setAttribute('value', option.trim());

                  const optionLabel = document.createElement('label');
                  optionLabel.textContent = option.trim();

                  //  line break 
                  const optionLineBreak = document.createElement('br');

                  questionsContainer.appendChild(inputField);
                  questionsContainer.appendChild(optionLabel);
                  questionsContainer.appendChild(optionLineBreak);
                });
              }
            }
          } else {
            console.error('Questions container element not found.');
          }

          const optionsArray = this.questionForm.get('options')?.value
            ? this.questionForm
                .get('options')
                ?.value.split(',')
                .map((option: string) => option.trim())
            : [];

          const formDataToSend = {
            title: titleControl?.value,
            question: questionControl.value,
            questionType: questionTypeControl.value,
            options: optionsArray,
            textInput: this.questionForm.get('textInput')?.value || '',
          };

          this.http
            .post('http://localhost:3000/questions', formDataToSend)
            .subscribe(
              (response) => {
                console.log('Form data sent successfully:', response);
                     this.questionForm.reset();
              },
              (error) => {
                console.error('Error occurred while sending form data:', error);
              }
            );
        }
      } else {
        console.error('Form is invalid. Cannot add question.');
      }

      const questionType = this.questionForm.get('questionType')?.value;

      if (questionType === 'radio' || questionType === 'checkbox') {
        this.questionForm.get('options')?.setValidators(Validators.required);
      } else {
        this.questionForm.get('options')?.clearValidators();
      }

        if (questionType !== 'text') {
        this.questionForm
          .get('questionType')
          ?.setValidators(Validators.required);
      } else {
        this.questionForm.get('questionType')?.clearValidators();
      }

      this.questionForm.updateValueAndValidity();
    }
  }
}
