import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointListComponent } from './control-point-list.component';

describe('ControlPointListComponent', () => {
  let component: ControlPointListComponent;
  let fixture: ComponentFixture<ControlPointListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPointListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
