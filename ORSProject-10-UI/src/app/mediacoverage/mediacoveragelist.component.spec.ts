import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacoveragelistComponent } from './mediacoveragelist.component';

describe('MediacoveragelistComponent', () => {
  let component: MediacoveragelistComponent;
  let fixture: ComponentFixture<MediacoveragelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediacoveragelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediacoveragelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
