import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointDashboardComponent } from './control-point-dashboard.component';

describe('ControlPointDashboardComponent', () => {
  let component: ControlPointDashboardComponent;
  let fixture: ComponentFixture<ControlPointDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPointDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
