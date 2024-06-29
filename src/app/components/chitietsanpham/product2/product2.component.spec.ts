import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2Component } from './product2.component';

describe('Product2Component', () => {
  let component: Product2Component;
  let fixture: ComponentFixture<Product2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Product2Component]
    });
    fixture = TestBed.createComponent(Product2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
