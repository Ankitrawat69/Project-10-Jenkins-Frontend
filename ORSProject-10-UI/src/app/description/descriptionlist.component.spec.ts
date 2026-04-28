import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionlistComponent } from './descriptionlist.component';

describe('DescriptionlistComponent', () => {
  let component: DescriptionlistComponent;
  let fixture: ComponentFixture<DescriptionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
