import { TestBed, inject } from '@angular/core/testing';

import { SpeechsService } from './speechs.service';

describe('SpeechsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechsService]
    });
  });

  it('should ...', inject([SpeechsService], (service: SpeechsService) => {
    expect(service).toBeTruthy();
  }));
});
