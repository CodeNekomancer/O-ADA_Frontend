import { TestBed } from '@angular/core/testing';
import { UniverseService } from './universe.service';


describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniverseService = TestBed.get(UniverseService);
    expect(service).toBeTruthy();
  });
});
