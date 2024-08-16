import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceeComponent } from './attendancee.component';

describe('AttendenceeComponent', () => {
  let component: AttendanceeComponent;
  let fixture: ComponentFixture<AttendanceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
