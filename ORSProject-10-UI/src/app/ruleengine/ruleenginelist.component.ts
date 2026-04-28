import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruleenginelist',
  templateUrl: './ruleenginelist.component.html',
  styleUrls: ['./ruleenginelist.component.css']
})
export class RuleenginelistComponent extends BaseListCtl {

  constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
            super(locator.endpoints.RULEENGINE, locator, route);
          }
      }
