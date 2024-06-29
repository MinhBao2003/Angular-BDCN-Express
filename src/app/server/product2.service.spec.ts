import { TestBed } from '@angular/core/testing';

import { Product2Service } from './product2.service';

describe('Product2Service', () => {
  let service: Product2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
