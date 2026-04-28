import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetlistComponent } from './internetlist.component';

describe('InternetlistComponent', () => {
  let component: InternetlistComponent;
  let fixture: ComponentFixture<InternetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
