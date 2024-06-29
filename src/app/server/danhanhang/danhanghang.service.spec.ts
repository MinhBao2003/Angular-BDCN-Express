import { TestBed } from '@angular/core/testing';

import { DanhanghangService } from './danhanghang.service';

describe('DanhanghangService', () => {
  let service: DanhanghangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhanghangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
