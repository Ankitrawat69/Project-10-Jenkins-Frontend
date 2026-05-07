import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() {
    console.log('in EndpointServiceService ts')
   }

  public SERVER_URL = "http://localhost:8080";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL+ "/Subject";
  public FACULTY = this.SERVER_URL+ "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL+ "/TimeTable";
  public JASPERREPORT = this.SERVER_URL+ "/Jasper";
  public CATERING = this.SERVER_URL+ "/Catering";
  public REPORT = this.SERVER_URL+ "/Report";
  public SUBSCRIPTION = this.SERVER_URL+ "/Subscription";
  public MEDIACOVERAGE = this.SERVER_URL+ "/MediaCoverage";
  public PRESS = this.SERVER_URL+ "/Press";
  public SMS = this.SERVER_URL+ "/Sms";
  public GAME = this.SERVER_URL+ "/Game";
  public STATE = this.SERVER_URL+ "/State";
  public SALES = this.SERVER_URL+ "/Sales";
  public SESSION = this.SERVER_URL+ "/Session";
  public PORTFOLIO = this.SERVER_URL+ "/Portfolio";
  public PIPELINE = this.SERVER_URL+ "/Pipeline";
  public SECRET = this.SERVER_URL+ "/Secret";
  public DESCRIPTION = this.SERVER_URL+ "/Description";
  public WEBHOOK = this.SERVER_URL+ "/Webhook";
  public INTERNET = this.SERVER_URL+ "/Internet";
  public LOCKER = this.SERVER_URL+ "/Locker";
  public ALLOW = this.SERVER_URL+ "/Allow";
  public LOGINATTEMPT = this.SERVER_URL+ "/LoginAttempt";
  public GEOFENCE = this.SERVER_URL+ "/Geofence";
  public SUBSCRIPTIONUSAGE = this.SERVER_URL+ "/SubscriptionUsage";
  public RULEENGINE = this.SERVER_URL+ "/RuleEngine";
  public CACHE = this.SERVER_URL+ "/Cache";
  public NOTIFICATION = this.SERVER_URL+ "/Notification";
  public SCHEDULERJOB = this.SERVER_URL+ "/SchedulerJob";
  public ACCOUNT = this.SERVER_URL+ "/Account";
  public MEETING = this.SERVER_URL+ "/Meeting";
  public CUSTOMER = this.SERVER_URL+ "/Customer";
 
}