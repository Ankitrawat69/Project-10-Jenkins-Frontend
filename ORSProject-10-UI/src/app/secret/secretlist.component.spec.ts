import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretlistComponent } from './secretlist.component';

describe('SecretlistComponent', () => {
  let component: SecretlistComponent;
  let fixture: ComponentFixture<SecretlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
