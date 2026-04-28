import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruleengine',
  templateUrl: './ruleengine.component.html',
  styleUrls: ['./ruleengine.component.css']
})
export class RuleengineComponent extends BaseCtl {

   constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
            super(locator.endpoints.RULEENGINE, locator, route);
          }
      }

