import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculsComponent } from './vehiculs.component';

describe('VehiculsComponent', () => {
  let component: VehiculsComponent;
  let fixture: ComponentFixture<VehiculsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
