import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointCreateComponent } from './control-point-create.component';

describe('ControlPointCreateComponent', () => {
  let component: ControlPointCreateComponent;
  let fixture: ComponentFixture<ControlPointCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPointCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
