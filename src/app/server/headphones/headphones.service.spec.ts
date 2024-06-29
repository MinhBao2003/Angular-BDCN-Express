import { TestBed } from '@angular/core/testing';

import { HeadphonesService } from './headphones.service';

describe('HeadphonesService', () => {
  let service: HeadphonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadphonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
