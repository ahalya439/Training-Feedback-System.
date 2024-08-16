import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackkComponent } from './feedbackk.component';

describe('FeedbackkComponent', () => {
  let component: FeedbackkComponent;
  let fixture: ComponentFixture<FeedbackkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
