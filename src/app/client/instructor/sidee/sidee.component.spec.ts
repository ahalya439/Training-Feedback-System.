import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideeComponent } from './sidee.component';

describe('SideeComponent', () => {
  let component: SideeComponent;
  let fixture: ComponentFixture<SideeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
