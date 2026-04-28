import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent extends BaseCtl {

       constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
               super(locator.endpoints.INTERNET, locator, route);
             }
           }
