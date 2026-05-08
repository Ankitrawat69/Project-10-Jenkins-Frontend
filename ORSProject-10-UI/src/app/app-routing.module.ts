import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { SignupComponent } from './login/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { CateringComponent } from './catering/catering.component';
import { CateringlistComponent } from './catering/cateringlist.component';
import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './report/reportlist.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionlistComponent } from './subscription/subscriptionlist.component';
import { MediacoverageComponent } from './mediacoverage/mediacoverage.component';
import { MediacoveragelistComponent } from './mediacoverage/mediacoveragelist.component';
import { PressComponent } from './press/press.component';
import { PresslistComponent } from './press/presslist.component';
import { SmsComponent } from './sms/sms.component';
import { SmslistComponent } from './sms/smslist.component';
import { GameComponent } from './game/game.component';
import { GamelistComponent } from './game/gamelist.component';
import { StateComponent } from './state/state.component';
import { StatelistComponent } from './state/statelist.component';
import { SalesComponent } from './sales/sales.component';
import { SaleslistComponent } from './sales/saleslist.component';
import { SessionComponent } from './session/session.component';
import { SessionlistComponent } from './session/sessionlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliolistComponent } from './portfolio/portfoliolist.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { PipelinelistComponent } from './pipeline/pipelinelist.component';
import { SecretComponent } from './secret/secret.component';
import { SecretlistComponent } from './secret/secretlist.component';
import { DescriptionComponent } from './description/description.component';
import { DescriptionlistComponent } from './description/descriptionlist.component';
import { WebhookComponent } from './webhook/webhook.component';
import { WebhooklistComponent } from './webhook/webhooklist.component';
import { InternetComponent } from './internet/internet.component';
import { InternetlistComponent } from './internet/internetlist.component';
import { LockerComponent } from './locker/locker.component';
import { LockerlistComponent } from './locker/lockerlist.component';
import { AllowComponent } from './allow/allow.component';
import { AllowlistComponent } from './allow/allowlist.component';
import { LoginattemptComponent } from './loginattempt/loginattempt.component';
import { LoginattemptlistComponent } from './loginattempt/loginattemptlist.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { GeofencelistComponent } from './geofence/geofencelist.component';
import { SubscriptionUsageComponent } from './subscription-usage/subscription-usage.component';
import { SubscriptionUsagelistComponent } from './subscription-usage/subscription-usagelist.component';
import { RuleengineComponent } from './ruleengine/ruleengine.component';
import { RuleenginelistComponent } from './ruleengine/ruleenginelist.component';
import { CacheComponent } from './cache/cache.component';
import { CachelistComponent } from './cache/cachelist.component';
import { NotificationchannelComponent } from './notificationchannel/notificationchannel.component';
import { NotificationchannellistComponent } from './notificationchannel/notificationchannellist.component';
import { SchedulerjobComponent } from './schedulerjob/schedulerjob.component';
import { SchedulerjoblistComponent } from './schedulerjob/schedulerjoblist.component';
import { AccountComponent } from './account/account.component';
import { AccountlistComponent } from './account/accountlist.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,

  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'role/:id',
    component: RoleComponent,
  },
  {
    path: 'rolelist',
    component: RoleListComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },

  {
    path: 'userlist',
    component: UserListComponent,
  },
    {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'college',
    component: CollegeComponent,
  },
  {
    path: 'college/:id',
    component: CollegeComponent,
  },

  {
    path: 'collegelist',
    component: CollegeListComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'student/:id',
    component: StudentComponent,
  },
  {
    path: 'studentlist',
    component: StudentListComponent,
  },
  {
    path: 'marksheet',
    component: MarksheetComponent,
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent,
  },
  {
    path: 'marksheetlist',
    component: MarksheetListComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: 'courselist',
    component: CourseListComponent,
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
  {
    path: 'subject/:id',
    component: SubjectComponent,
  },
  {
    path: 'subjectlist',
    component: SubjectListComponent,
  },
  {
    path: 'timetable',
    component: TimetableComponent,
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent,
  },
  {
    path: 'timetablelist',
    component: TimetableListComponent,
  },
  {
    path: 'faculty',
    component: FacultyComponent,
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent,
  },
  {
    path: 'facultylist',
    component: FacultyListComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent
  },
  {
    path: 'catering',
    component: CateringComponent
  },
  {
    path: 'catering/:id',
    component: CateringComponent
  },
 {
   path: 'cateringlist',
   component: CateringlistComponent
 },
 {
   path: 'report',
   component: ReportComponent
 },
  {
    path: 'report/:id',
    component: ReportComponent  
  },
  {
    path: 'reportlist',
    component: ReportlistComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'subscription/:id',
    component: SubscriptionComponent  
  },
  {
    path: 'subscriptionlist',
    component: SubscriptionlistComponent
  },
  {
    path: 'mediacoverage',
    component: MediacoverageComponent
  },
  { 
    path: 'mediacoverage/:id',
    component: MediacoverageComponent
  },
  {
    path: 'mediacoveragelist',
    component: MediacoveragelistComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'press/:id',
    component: PressComponent
  },
  {
    path: 'presslist',
    component: PresslistComponent
  },
  {
    path: 'sms',
    component: SmsComponent
  },
  {
    path: 'sms/:id',
    component: SmsComponent
  },
  { 
    path: 'smslist',
    component: SmslistComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'gamelist',
    component: GamelistComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: 'state/:id',
    component: StateComponent
  },
  {
    path: 'statelist',
    component: StatelistComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'sales/:id',
    component: SalesComponent
  },
  {
    path: 'saleslist',
    component: SaleslistComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'session/:id',
    component: SessionComponent
  },
  {
    path: 'sessionlist',
    component: SessionlistComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'portfolio/:id',
    component: PortfolioComponent
  },
  {
    path: 'portfoliolist',
    component: PortfoliolistComponent
  },
  {
    path: 'pipeline',
    component: PipelineComponent
  },
  {
    path: 'pipeline/:id',
    component: PipelineComponent
  },
  {
    path: 'pipelinelist',
    component: PipelinelistComponent
  },
  {
    path: 'secret',
    component: SecretComponent
  },
  {
    path: 'secret/:id',
    component: SecretComponent
  },
  {
    path: 'secretlist',
    component: SecretlistComponent
  },
  {
    path: 'description',
    component: DescriptionComponent
  },
  {
    path: 'description/:id',
    component: DescriptionComponent
  },
  {
    path: 'descriptionlist',
    component: DescriptionlistComponent
  },
  {
    path: 'webhook',
    component: WebhookComponent
  },
  {
    path: 'webhook/:id',
    component: WebhookComponent
  },
  {
    path: 'webhooklist',
    component: WebhooklistComponent
  },
  {
    path: 'internet',
    component: InternetComponent
  },
  {
    path: 'internet/:id',
    component: InternetComponent
  },
  {
    path: 'internetlist',
    component: InternetlistComponent
  },
  {
    path: 'locker',
    component: LockerComponent
  },
  {
    path: 'locker/:id',
    component: LockerComponent
  },
  {
    path: 'lockerlist',
    component: LockerlistComponent
  },
  {
    path: 'allow',
    component: AllowComponent
  },
  {
    path: 'allow/:id',
    component: AllowComponent
  },
  {
    path: 'allowlist',
    component: AllowlistComponent
  },
  {
    path: 'loginattempt',
    component: LoginattemptComponent
  },
  {
    path: 'loginattempt/:id',
    component: LoginattemptComponent
  },
  {
    path: 'loginattemptlist',
    component: LoginattemptlistComponent
  },
  {
    path: 'geofence',
    component: GeofenceComponent
  },
  {
    path: 'geofence/:id',
    component: GeofenceComponent
  },
  {
    path: 'geofencelist',
    component: GeofencelistComponent
  },
  {
    path: 'subscription-usage',
    component: SubscriptionUsageComponent
  },
  {
    path: 'subscription-usage/:id',
    component: SubscriptionUsageComponent
  },
  {
    path: 'subscription-usagelist',
    component: SubscriptionUsagelistComponent
  },
  {
    path: 'ruleengine',
    component: RuleengineComponent
  },
  {
    path: 'ruleengine/:id',
    component: RuleengineComponent
  },
  {
    path: 'ruleenginelist',
    component: RuleenginelistComponent
  },
  {
    path: 'cache',
    component: CacheComponent
  },
  {
    path: 'cache/:id',
    component: CacheComponent
  },
  {
    path: 'cachelist',
    component: CachelistComponent
  },
  {
    path: 'notificationchannel',
    component: NotificationchannelComponent
  },
  {
    path: 'notificationchannel/:id',
    component: NotificationchannelComponent
  },
  { path: 'notificationchannellist',
    component: NotificationchannellistComponent
  },
  {
    path: 'schedulerjob',
    component: SchedulerjobComponent
  },
  {
    path: 'schedulerjob/:id',
    component: SchedulerjobComponent
  },
  {
    path: 'schedulerjoblist',
    component: SchedulerjoblistComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },
  {
    path: 'accountlist',
    component: AccountlistComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
