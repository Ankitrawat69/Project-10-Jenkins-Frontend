import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinelistComponent } from './pipelinelist.component';

describe('PipelinelistComponent', () => {
  let component: PipelinelistComponent;
  let fixture: ComponentFixture<PipelinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelinelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
