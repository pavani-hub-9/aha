import { TestBed } from '@angular/core/testing';

import { ThrillersCrimeService } from './thrillers-crime.service';

describe('ThrillersCrimeService', () => {
  let service: ThrillersCrimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrillersCrimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
