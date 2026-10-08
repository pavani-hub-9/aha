import { TestBed } from '@angular/core/testing';

import { EmotionalDramaService } from './emotional-drama.service';

describe('EmotionalDramaService', () => {
  let service: EmotionalDramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmotionalDramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
