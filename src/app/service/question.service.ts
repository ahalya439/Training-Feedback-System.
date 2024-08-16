import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Question } from '../client/admin/question/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:3000/questions'; // Update with your API URL

  constructor(private http: HttpClient) {}

  addQuestion(questionData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, questionData);
  }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  //   updateParticipantForm(formData: any): Observable<any> {
  //     return this.http.post<any>(this.apiUrl, formData);
  // }

  // getParticipantFormData(): Observable<any> {
  //     return this.http.get<any>(this.apiUrl,);
  // }
}
