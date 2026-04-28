import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerlistComponent } from './lockerlist.component';

describe('LockerlistComponent', () => {
  let component: LockerlistComponent;
  let fixture: ComponentFixture<LockerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
