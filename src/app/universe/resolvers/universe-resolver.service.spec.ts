import { TestBed } from '@angular/core/testing';

import { UniverseResolverService } from './universe-resolver.service';

describe('ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniverseResolverService = TestBed.get(UniverseResolverService);
    expect(service).toBeTruthy();
  });
});
