import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presslist',
  templateUrl: './presslist.component.html',
  styleUrls: ['./presslist.component.css']
})
export class PresslistComponent extends BaseListCtl {

  constructor(locator : ServiceLocatorService, route : ActivatedRoute) {
       super(locator.endpoints.PRESS, locator, route);
     }
 }
