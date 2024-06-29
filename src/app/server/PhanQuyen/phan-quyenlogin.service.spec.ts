import { TestBed } from '@angular/core/testing';

import { PhanQuyenloginService } from './phan-quyenlogin.service';

describe('PhanQuyenloginService', () => {
  let service: PhanQuyenloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhanQuyenloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
