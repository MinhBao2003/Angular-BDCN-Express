import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothComponent } from './bluetooth.component';

describe('BluetoothComponent', () => {
  let component: BluetoothComponent;
  let fixture: ComponentFixture<BluetoothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BluetoothComponent]
    });
    fixture = TestBed.createComponent(BluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
