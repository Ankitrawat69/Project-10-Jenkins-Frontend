import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginattemptComponent } from './loginattempt.component';

describe('LoginattemptComponent', () => {
  let component: LoginattemptComponent;
  let fixture: ComponentFixture<LoginattemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginattemptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginattemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
