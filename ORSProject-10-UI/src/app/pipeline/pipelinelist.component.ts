import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipelinelist',
  templateUrl: './pipelinelist.component.html',
  styleUrls: ['./pipelinelist.component.css']
})
export class PipelinelistComponent extends BaseListCtl {

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                       super(locator.endpoints.PIPELINE, locator, route);
                }
              }
  
