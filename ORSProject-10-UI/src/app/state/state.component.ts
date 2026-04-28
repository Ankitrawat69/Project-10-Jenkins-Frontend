import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 
        super(locator.endpoints.STATE, locator, route);
      }
     }
  