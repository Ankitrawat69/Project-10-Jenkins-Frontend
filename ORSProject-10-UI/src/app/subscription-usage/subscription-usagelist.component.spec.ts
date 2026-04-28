import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionUsagelistComponent } from './subscription-usagelist.component';

describe('SubscriptionUsagelistComponent', () => {
  let component: SubscriptionUsagelistComponent;
  let fixture: ComponentFixture<SubscriptionUsagelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionUsagelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionUsagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
