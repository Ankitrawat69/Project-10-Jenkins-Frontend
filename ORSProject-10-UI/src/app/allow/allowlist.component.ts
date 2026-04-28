import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allowlist',
  templateUrl: './allowlist.component.html',
  styleUrls: ['./allowlist.component.css']
})
export class AllowlistComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
                   super(locator.endpoints.ALLOW, locator, route);
                 }
               }
  