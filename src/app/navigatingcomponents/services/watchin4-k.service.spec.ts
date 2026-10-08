import { TestBed } from '@angular/core/testing';

import { Watchin4KService } from './watchin4-k.service';

describe('Watchin4KService', () => {
  let service: Watchin4KService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Watchin4KService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
