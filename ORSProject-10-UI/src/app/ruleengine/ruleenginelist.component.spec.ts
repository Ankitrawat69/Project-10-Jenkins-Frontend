import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleenginelistComponent } from './ruleenginelist.component';

describe('RuleenginelistComponent', () => {
  let component: RuleenginelistComponent;
  let fixture: ComponentFixture<RuleenginelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleenginelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleenginelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
