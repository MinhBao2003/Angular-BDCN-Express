import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokiaC324GB128GBComponent } from './nokia-c32-4-gb-128-gb.component';

describe('NokiaC324GB128GBComponent', () => {
  let component: NokiaC324GB128GBComponent;
  let fixture: ComponentFixture<NokiaC324GB128GBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NokiaC324GB128GBComponent]
    });
    fixture = TestBed.createComponent(NokiaC324GB128GBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
