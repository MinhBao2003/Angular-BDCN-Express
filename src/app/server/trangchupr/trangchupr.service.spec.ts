import { TestBed } from '@angular/core/testing';

import { TrangchuprService } from './trangchupr.service';

describe('TrangchuprService', () => {
  let service: TrangchuprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrangchuprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
