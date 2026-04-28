import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends BaseCtl {
 
   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
            super(locator.endpoints.PORTFOLIO, locator, route);
          }
         }