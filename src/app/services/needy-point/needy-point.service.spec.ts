import { TestBed } from '@angular/core/testing';

import { NeedyPointService } from './needy-point.service';

describe('NeedyPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeedyPointService = TestBed.get(NeedyPointService);
    expect(service).toBeTruthy();
  });
});
