import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mediacoverage',
  templateUrl: './mediacoverage.component.html',
  styleUrls: ['./mediacoverage.component.css']
})
export class MediacoverageComponent extends BaseCtl{

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
               super(locator.endpoints.MEDIACOVERAGE, locator, route);
             }
            }
