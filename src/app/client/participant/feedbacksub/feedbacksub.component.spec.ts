import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksubComponent } from './feedbacksub.component';

describe('FeedbacksubComponent', () => {
  let component: FeedbacksubComponent;
  let fixture: ComponentFixture<FeedbacksubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbacksubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbacksubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
