import { TestBed } from '@angular/core/testing';

import { DathangService } from './dathang.service';

describe('DathangService', () => {
  let service: DathangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DathangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
