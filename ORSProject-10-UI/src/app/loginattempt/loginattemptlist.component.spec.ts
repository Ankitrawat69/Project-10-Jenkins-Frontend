import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginattemptlistComponent } from './loginattemptlist.component';

describe('LoginattemptlistComponent', () => {
  let component: LoginattemptlistComponent;
  let fixture: ComponentFixture<LoginattemptlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginattemptlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginattemptlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
