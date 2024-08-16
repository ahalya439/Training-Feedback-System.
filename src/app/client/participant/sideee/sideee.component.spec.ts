import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideeeComponent } from './sideee.component';

describe('SideeeComponent', () => {
  let component: SideeeComponent;
  let fixture: ComponentFixture<SideeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
