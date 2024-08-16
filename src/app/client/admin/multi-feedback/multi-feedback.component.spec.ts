import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFeedbackComponent } from './multi-feedback.component';

describe('MultiFeedbackComponent', () => {
  let component: MultiFeedbackComponent;
  let fixture: ComponentFixture<MultiFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
