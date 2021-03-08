import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointComponent } from './control.point.component';

describe('ControlPointComponent', () => {
  let component: ControlPointComponent;
  let fixture: ComponentFixture<ControlPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
