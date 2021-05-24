import { TestBed } from '@angular/core/testing';

import { UaccService } from './uacc.service';

describe('UaccService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UaccService = TestBed.get(UaccService);
    expect(service).toBeTruthy();
  });
});
