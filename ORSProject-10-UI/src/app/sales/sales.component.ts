import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent extends BaseCtl{
 
     constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
         super(locator.endpoints.SALES, locator, route);
       }
      }