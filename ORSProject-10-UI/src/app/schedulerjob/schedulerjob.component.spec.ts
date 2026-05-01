import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerjobComponent } from './schedulerjob.component';

describe('SchedulerjobComponent', () => {
  let component: SchedulerjobComponent;
  let fixture: ComponentFixture<SchedulerjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
