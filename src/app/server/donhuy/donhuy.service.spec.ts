import { TestBed } from '@angular/core/testing';

import { DonhuyService } from './donhuy.service';

describe('DonhuyService', () => {
  let service: DonhuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonhuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
