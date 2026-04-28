import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                       super(locator.endpoints.DESCRIPTION, locator, route);
       }
     }