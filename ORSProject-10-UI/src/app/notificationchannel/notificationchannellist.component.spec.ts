import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationchannellistComponent } from './notificationchannellist.component';

describe('NotificationchannellistComponent', () => {
  let component: NotificationchannellistComponent;
  let fixture: ComponentFixture<NotificationchannellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationchannellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationchannellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
