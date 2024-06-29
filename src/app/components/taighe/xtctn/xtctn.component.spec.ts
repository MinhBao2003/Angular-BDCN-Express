import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtctnComponent } from './xtctn.component';

describe('XtctnComponent', () => {
  let component: XtctnComponent;
  let fixture: ComponentFixture<XtctnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XtctnComponent]
    });
    fixture = TestBed.createComponent(XtctnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
