import { TestBed } from '@angular/core/testing';

import { FourthService } from './fourth.service';

describe('FourthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FourthService = TestBed.get(FourthService);
    expect(service).toBeTruthy();
  });
});
