import { TestBed, inject } from '@angular/core/testing';

import { WcNextMatchService } from './wc-next-match.service';

describe('WcNextMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcNextMatchService]
    });
  });

  it('should be created', inject([WcNextMatchService], (service: WcNextMatchService) => {
    expect(service).toBeTruthy();
  }));
});
