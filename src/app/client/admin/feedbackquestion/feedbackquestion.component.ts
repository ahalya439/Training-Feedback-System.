import { Component } from '@angular/core';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../question/question.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedbackquestion',
  templateUrl: './feedbackquestion.component.html',
  styleUrl: './feedbackquestion.component.scss',
})
export class FeedbackquestionComponent {
  constructor(private http: HttpClient) {}
  anonymousFeedback: boolean = false;
  studentName: string = '';
  contentRelevance: number = 0;
  feedback: any = {}; 
  ratings: number[] = [1, 2, 3, 4, 5]; 

  assignFeedback() {
   
  }
}
