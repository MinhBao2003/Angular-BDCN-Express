import { TestBed } from '@angular/core/testing';

import { ProductinformationService } from './productinformation.service';

describe('ProductinformationService', () => {
  let service: ProductinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
