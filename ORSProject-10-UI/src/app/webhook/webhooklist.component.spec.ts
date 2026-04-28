import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhooklistComponent } from './webhooklist.component';

describe('WebhooklistComponent', () => {
  let component: WebhooklistComponent;
  let fixture: ComponentFixture<WebhooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebhooklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebhooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
