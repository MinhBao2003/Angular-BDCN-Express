import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtcdhComponent } from './xtcdh.component';

describe('XtcdhComponent', () => {
  let component: XtcdhComponent;
  let fixture: ComponentFixture<XtcdhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XtcdhComponent]
    });
    fixture = TestBed.createComponent(XtcdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
