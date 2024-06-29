import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produc3Component } from './produc3.component';

describe('Produc3Component', () => {
  let component: Produc3Component;
  let fixture: ComponentFixture<Produc3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produc3Component]
    });
    fixture = TestBed.createComponent(Produc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
