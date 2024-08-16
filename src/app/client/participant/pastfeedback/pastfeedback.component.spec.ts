import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastfeedbackComponent } from './pastfeedback.component';

describe('PastfeedbackComponent', () => {
  let component: PastfeedbackComponent;
  let fixture: ComponentFixture<PastfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
