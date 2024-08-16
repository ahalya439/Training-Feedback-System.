import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenddComponent } from './attendd.component';

describe('AttenddComponent', () => {
  let component: AttenddComponent;
  let fixture: ComponentFixture<AttenddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttenddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttenddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
