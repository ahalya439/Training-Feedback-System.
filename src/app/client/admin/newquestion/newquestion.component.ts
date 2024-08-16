import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../service/question.service';
import { Question } from '../question/question.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrl: './newquestion.component.scss',
})
export class NewquestionComponent implements OnInit {
  questions: any[] = [];
  textResponses: { [key: string]: { response: string } } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch questions from the backend
    this.http.get<any>('http://localhost:3000/questions').subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.log('Error fetching questions:', error);
      }
    );
  }

  updateResponse(questionId: string, response: string) {
    this.textResponses[questionId] = { response: response };
  }
}

//   textResponses: { [key: string]: { response: string } } = {};

//   questions: Question[] = [];

//   constructor(private questionService: QuestionService) { }

//   ngOnInit(): void {
//     this.loadQuestions();
//   }

//   loadQuestions() {
//     this.questionService.getQuestions().subscribe((data: any) => {
//       this.questions = data;
//     });
//   }
//   updateResponse(questionId: string, response: string): void {
//     if (!this.textResponses[questionId]) {
//       this.textResponses[questionId] = { response: '' }; // Initialize if not defined
//     }
//     this.textResponses[questionId].response = response;
//   }

// }
