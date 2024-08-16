import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplefeedbackComponent } from './multiplefeedback.component';

describe('MultiplefeedbackComponent', () => {
  let component: MultiplefeedbackComponent;
  let fixture: ComponentFixture<MultiplefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplefeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
