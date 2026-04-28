import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent extends BaseCtl {

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
                     super(locator.endpoints.PIPELINE, locator, route);
     }
   }
