import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionUsageComponent } from './subscription-usage.component';

describe('SubscriptionUsageComponent', () => {
  let component: SubscriptionUsageComponent;
  let fixture: ComponentFixture<SubscriptionUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
