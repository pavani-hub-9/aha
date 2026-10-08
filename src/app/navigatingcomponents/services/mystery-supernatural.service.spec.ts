import { TestBed } from '@angular/core/testing';

import { MysterySupernaturalService } from './mystery-supernatural.service';

describe('MysterySupernaturalService', () => {
  let service: MysterySupernaturalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysterySupernaturalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
