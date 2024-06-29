import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiSmartDisplayMax86InchComponent } from './xiaomi-smart-display-max-86-inch.component';

describe('XiaomiSmartDisplayMax86InchComponent', () => {
  let component: XiaomiSmartDisplayMax86InchComponent;
  let fixture: ComponentFixture<XiaomiSmartDisplayMax86InchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiaomiSmartDisplayMax86InchComponent]
    });
    fixture = TestBed.createComponent(XiaomiSmartDisplayMax86InchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
