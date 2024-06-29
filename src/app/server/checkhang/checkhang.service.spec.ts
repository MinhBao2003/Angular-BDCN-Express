import { TestBed } from '@angular/core/testing';

import { CheckhangService } from './checkhang.service';

describe('CheckhangService', () => {
  let service: CheckhangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckhangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
