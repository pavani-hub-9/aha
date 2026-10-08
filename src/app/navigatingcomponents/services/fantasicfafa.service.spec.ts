import { TestBed } from '@angular/core/testing';

import { FantasicfafaService } from './fantasicfafa.service';

describe('FantasicfafaService', () => {
  let service: FantasicfafaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasicfafaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
