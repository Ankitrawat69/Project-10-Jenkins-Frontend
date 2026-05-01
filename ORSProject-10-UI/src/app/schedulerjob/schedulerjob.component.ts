import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedulerjob',
  templateUrl: './schedulerjob.component.html',
  styleUrls: ['./schedulerjob.component.css']
})
export class SchedulerjobComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                     super(locator.endpoints.SCHEDULERJOB, locator, route);
                   }
                  }
