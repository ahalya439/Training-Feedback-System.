import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackquestionComponent } from './feedbackquestion.component';

describe('FeedbackquestionComponent', () => {
  let component: FeedbackquestionComponent;
  let fixture: ComponentFixture<FeedbackquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackquestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
