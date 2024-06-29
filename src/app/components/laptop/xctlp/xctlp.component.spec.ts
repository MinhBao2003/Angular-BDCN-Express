import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XctlpComponent } from './xctlp.component';

describe('XctlpComponent', () => {
  let component: XctlpComponent;
  let fixture: ComponentFixture<XctlpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XctlpComponent]
    });
    fixture = TestBed.createComponent(XctlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
