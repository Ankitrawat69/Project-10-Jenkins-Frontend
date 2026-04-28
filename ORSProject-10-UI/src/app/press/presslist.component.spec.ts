import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresslistComponent } from './presslist.component';

describe('PresslistComponent', () => {
  let component: PresslistComponent;
  let fixture: ComponentFixture<PresslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
