import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtctvComponent } from './xtctv.component';

describe('XtctvComponent', () => {
  let component: XtctvComponent;
  let fixture: ComponentFixture<XtctvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XtctvComponent]
    });
    fixture = TestBed.createComponent(XtctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
