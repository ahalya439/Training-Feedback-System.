import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendComponent } from './client/admin/attend/attend.component';
import { AttendanceComponent } from './client/admin/attendance/attendance.component';
import { FeedbackComponent } from './client/admin/feedback/feedback.component';
import { FeedbackquestionComponent } from './client/admin/feedbackquestion/feedbackquestion.component';
import { GenerateQuestionComponent } from './client/admin/generate-question/generate-question.component';
import { GenerateFeedbackComponent } from './client/admin/generate-feedback/generate-feedback.component';
import { LoginComponent } from './client/admin/login/login.component';
import { MultiFeedbackComponent } from './client/admin/multi-feedback/multi-feedback.component';
import { NavbarComponent } from './client/admin/navbar/navbar.component';
import { NewquestionComponent } from './client/admin/newquestion/newquestion.component';
import { QuestionComponent } from './client/admin/question/question.component';
import { ReportComponent } from './client/admin/report/report.component';
import { SessionComponent } from './client/admin/session/session.component';
import { SideComponent } from './client/admin/side/side.component';
import { UserManagementComponent } from './client/admin/user-management/user-management.component';
import { AttendanceeComponent } from './client/instructor/attendancee/attendancee.component';
import { AttenddComponent } from './client/instructor/attendd/attendd.component';
import { InsightComponent } from './client/instructor/insight/insight.component';
import { LandComponent } from './client/instructor/land/land.component';
import { NavComponent } from './client/instructor/nav/nav.component';
import { ReporttComponent } from './client/instructor/reportt/reportt.component';
import { SideeComponent } from './client/instructor/sidee/sidee.component';
import { FeedbackkComponent } from './client/participant/feedbackk/feedbackk.component';
import { FeedbacksubComponent } from './client/participant/feedbacksub/feedbacksub.component';
import { LandingComponent } from './client/participant/landing/landing.component';
import { MultiplefeedbackComponent } from './client/participant/multiplefeedback/multiplefeedback.component';
import { NavbarrComponent } from './client/participant/navbarr/navbarr.component';
import { PastfeedbackComponent } from './client/participant/pastfeedback/pastfeedback.component';
import { RepComponent } from './client/participant/rep/rep.component';
import { SideeeComponent } from './client/participant/sideee/sideee.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendComponent,
    AttendanceComponent,
    FeedbackComponent,
    FeedbackquestionComponent,
    GenerateQuestionComponent,
    GenerateFeedbackComponent,
    LoginComponent,
    MultiFeedbackComponent,
    NavbarComponent,
    NewquestionComponent,
    QuestionComponent,
    ReportComponent,
    SessionComponent,
    SideComponent,
    UserManagementComponent,
    AttendanceeComponent,
    AttenddComponent,
    InsightComponent,
    LandComponent,
    NavComponent,
    ReporttComponent,
    SideeComponent,
    FeedbackkComponent,
    FeedbacksubComponent,
    LandingComponent,
    MultiplefeedbackComponent,
    NavbarrComponent,
    PastfeedbackComponent,
    RepComponent,
    SideeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
