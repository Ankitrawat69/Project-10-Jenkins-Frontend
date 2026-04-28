import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-mediacoveragelist',
  templateUrl: './mediacoveragelist.component.html',
  styleUrls: ['./mediacoveragelist.component.css']
})
export class MediacoveragelistComponent extends BaseListCtl {

        constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
             super(locator.endpoints.MEDIACOVERAGE, locator, route);
           }
          }
