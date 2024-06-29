import { TestBed } from '@angular/core/testing';

import { QnaService } from './qna.service';

describe('QnaService', () => {
  let service: QnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
