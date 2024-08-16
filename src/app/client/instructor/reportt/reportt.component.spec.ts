import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttComponent } from './reportt.component';

describe('ReporttComponent', () => {
  let component: ReporttComponent;
  let fixture: ComponentFixture<ReporttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
