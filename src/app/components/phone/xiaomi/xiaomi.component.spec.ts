import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiComponent } from './xiaomi.component';

describe('XiaomiComponent', () => {
  let component: XiaomiComponent;
  let fixture: ComponentFixture<XiaomiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiaomiComponent]
    });
    fixture = TestBed.createComponent(XiaomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
