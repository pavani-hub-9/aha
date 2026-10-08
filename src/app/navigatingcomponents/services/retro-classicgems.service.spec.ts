import { TestBed } from '@angular/core/testing';

import { RetroClassicgemsService } from './retro-classicgems.service';

describe('RetroClassicgemsService', () => {
  let service: RetroClassicgemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetroClassicgemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
