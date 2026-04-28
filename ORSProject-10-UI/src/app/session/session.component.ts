import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent extends BaseCtl {

       constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
               super(locator.endpoints.SESSION, locator, route);
             }
            }
