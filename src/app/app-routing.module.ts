import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './client/admin/session/session.component'; // Import the SessionComponent
import { LoginComponent } from './client/admin/login/login.component';
import { SideComponent } from './client/admin/side/side.component';
import { NavbarComponent } from './client/admin/navbar/navbar.component';
import { FeedbackComponent } from './client/admin/feedback/feedback.component';
import { AttendanceComponent } from './client/admin/attendance/attendance.component';
import { ReportComponent } from './client/admin/report/report.component';
import { GenerateFeedbackComponent } from './client/admin/generate-feedback/generate-feedback.component';
import { AttendComponent } from './client/admin/attend/attend.component';
import { MultiFeedbackComponent } from './client/admin/multi-feedback/multi-feedback.component';
import { QuestionComponent } from './client/admin/question/question.component';
import { FeedbackquestionComponent } from './client/admin/feedbackquestion/feedbackquestion.component';
import { UserManagementComponent } from './client/admin/user-management/user-management.component';
// import { FilterComponent } from './admin/filter/filter.component';
import { AttenddComponent } from './client/instructor/attendd/attendd.component';
import { NavComponent } from './client/instructor/nav/nav.component';
import { ReporttComponent } from './client/instructor/reportt/reportt.component';
import { AttendanceeComponent } from './client/instructor/attendancee/attendancee.component';
import { FeedbackkComponent } from './client/participant/feedbackk/feedbackk.component';
import { FeedbacksubComponent } from './client/participant/feedbacksub/feedbacksub.component';
import { LandingComponent } from './client/participant/landing/landing.component';
import { RepComponent } from './client/participant/rep/rep.component';
import { MultiplefeedbackComponent } from './client/participant/multiplefeedback/multiplefeedback.component';
import { PastfeedbackComponent } from './client/participant/pastfeedback/pastfeedback.component';
import { NavbarrComponent } from './client/participant/navbarr/navbarr.component';
import { LandComponent } from './client/instructor/land/land.component'; 
import { SideeComponent } from './client/instructor/sidee/sidee.component';
import { SideeeComponent } from './client/participant/sideee/sideee.component'; 

import { InsightComponent } from './client/instructor/insight/insight.component';

 

import { NewquestionComponent } from './client/admin/newquestion/newquestion.component';








const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' } ,// Handle invalid routes

  // { path: 'participant', component: LandingComponent },
  // { path: 'instructor-attend', component: AttenddComponent },
  // { path: 'admin-session', component: SessionComponent },
 

{path:'sidee',component:SideeComponent},
{path:'sideee',component:SideeeComponent},

  // {path:'',redirectTo:'session',pathMatch:'full'},
  { path:'navbar',component:NavbarComponent},
{ path:'side',component:SideComponent},
{ path: 'session', component: SessionComponent },
{ path: 'report', component: ReportComponent },
{ path: 'attendance', component: AttendanceComponent },
{ path: 'feedback', component: FeedbackComponent },
{ path: 'generatefeedback', component: GenerateFeedbackComponent },
{path: 'attend',component: AttendComponent},
{path: 'multifeedback',component:MultiFeedbackComponent},
{path: 'question',component:QuestionComponent},
{path:'feedbackquestion',component:FeedbackquestionComponent},
{path:'usermanagement',component:UserManagementComponent},
{path:'nav',component:NavComponent},
{path:'land',component:LandComponent},
{path:'attendancee',component:AttendanceeComponent},
{path:'reportt',component:ReporttComponent},
{path:'feedbackk',component:FeedbackkComponent},
{path:'feedbacksub',component:FeedbacksubComponent},
{path:'Multiplefeedback',component:MultiplefeedbackComponent},
{path:'Pastfeedback',component:PastfeedbackComponent},
{path:'rep',component:RepComponent},
{path:'navbarr',component:NavbarrComponent},
{path:'landing',component:LandingComponent},
// {path:'filter',component:FilterComponent},
{path:'attendd',component:AttenddComponent},
{path:'insight',component:InsightComponent},
{path:'newquestion',component:NewquestionComponent}
];
 // Route to the SessionComponent


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

  // export const routingComponents=[SessionComponent,FeedbackComponent]
 
