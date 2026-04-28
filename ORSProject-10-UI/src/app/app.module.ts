import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule,
} from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TimetableComponent,
    FooterComponent,
    FacultyComponent,
    RoleListComponent,
    UserListComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    MyprofileComponent,
    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    CateringComponent,
    CateringlistComponent,
    ReportComponent,
    ReportlistComponent,
    SubscriptionComponent,
    SubscriptionlistComponent,
    MediacoverageComponent,
    MediacoveragelistComponent,
    PressComponent,
    PresslistComponent,
    SmsComponent,
    SmslistComponent,
    GameComponent,
    GamelistComponent,
    StateComponent,
    StatelistComponent,
    SalesComponent,
    SaleslistComponent,
    SessionComponent,
    SessionlistComponent,
    PortfolioComponent,
    PortfoliolistComponent,
    PipelineComponent,
    PipelinelistComponent,
    SecretComponent,
    SecretlistComponent,
    DescriptionComponent,
    DescriptionlistComponent,
    WebhookComponent,
    WebhooklistComponent,
    InternetComponent,
    InternetlistComponent,
    LockerComponent,
    LockerlistComponent,
    AllowlistComponent,
    AllowComponent,
    LoginattemptComponent,
    LoginattemptlistComponent,
    GeofenceComponent,
    GeofencelistComponent,
    SubscriptionUsageComponent,
    SubscriptionUsagelistComponent,
    RuleengineComponent,
    RuleenginelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },

    EndpointServiceService,
    HttpServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
