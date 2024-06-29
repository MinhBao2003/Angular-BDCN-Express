import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSROGPhone7Ultimate16GB512GBComponent } from './asus-rog-phone-7-ultimate-16-gb-512-gb.component';

describe('ASUSROGPhone7Ultimate16GB512GBComponent', () => {
  let component: ASUSROGPhone7Ultimate16GB512GBComponent;
  let fixture: ComponentFixture<ASUSROGPhone7Ultimate16GB512GBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ASUSROGPhone7Ultimate16GB512GBComponent]
    });
    fixture = TestBed.createComponent(ASUSROGPhone7Ultimate16GB512GBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
