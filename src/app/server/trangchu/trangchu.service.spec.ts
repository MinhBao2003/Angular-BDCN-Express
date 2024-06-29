import { TestBed } from '@angular/core/testing';

import { TrangchuService } from './trangchu.service';

describe('TrangchuService', () => {
  let service: TrangchuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrangchuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
