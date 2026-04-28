import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-portfoliolist',
  templateUrl: './portfoliolist.component.html',
  styleUrls: ['./portfoliolist.component.css']
})
export class PortfoliolistComponent extends BaseListCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
              super(locator.endpoints.PORTFOLIO, locator, route);
            }
       }

