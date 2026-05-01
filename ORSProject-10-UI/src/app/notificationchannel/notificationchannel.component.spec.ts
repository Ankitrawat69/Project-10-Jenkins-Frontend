import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationchannelComponent } from './notificationchannel.component';

describe('NotificationchannelComponent', () => {
  let component: NotificationchannelComponent;
  let fixture: ComponentFixture<NotificationchannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationchannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
