import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomitvComponent } from './xiaomitv.component';

describe('XiaomitvComponent', () => {
  let component: XiaomitvComponent;
  let fixture: ComponentFixture<XiaomitvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XiaomitvComponent]
    });
    fixture = TestBed.createComponent(XiaomitvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
