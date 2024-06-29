import { TestBed } from '@angular/core/testing';

import { TiviService } from './tivi.service';

describe('TiviService', () => {
  let service: TiviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
