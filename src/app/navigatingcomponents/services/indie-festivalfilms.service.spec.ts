import { TestBed } from '@angular/core/testing';

import { IndieFestivalfilmsService } from './indie-festivalfilms.service';

describe('IndieFestivalfilmsService', () => {
  let service: IndieFestivalfilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndieFestivalfilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
