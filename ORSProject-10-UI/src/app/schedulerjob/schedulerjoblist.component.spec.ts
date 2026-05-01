import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerjoblistComponent } from './schedulerjoblist.component';

describe('SchedulerjoblistComponent', () => {
  let component: SchedulerjoblistComponent;
  let fixture: ComponentFixture<SchedulerjoblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerjoblistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
