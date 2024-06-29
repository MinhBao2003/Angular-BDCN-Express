import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitriComponent } from './vitri.component';

describe('VitriComponent', () => {
  let component: VitriComponent;
  let fixture: ComponentFixture<VitriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitriComponent]
    });
    fixture = TestBed.createComponent(VitriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
