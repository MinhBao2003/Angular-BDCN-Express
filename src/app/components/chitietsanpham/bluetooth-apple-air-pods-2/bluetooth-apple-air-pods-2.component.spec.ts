import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothAppleAirPods2Component } from './bluetooth-apple-air-pods-2.component';

describe('BluetoothAppleAirPods2Component', () => {
  let component: BluetoothAppleAirPods2Component;
  let fixture: ComponentFixture<BluetoothAppleAirPods2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BluetoothAppleAirPods2Component]
    });
    fixture = TestBed.createComponent(BluetoothAppleAirPods2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
