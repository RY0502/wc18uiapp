import { TestBed, inject } from '@angular/core/testing';

import { WcLastMatchService } from './wc-last-match.service';

describe('WcLastMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcLastMatchService]
    });
  });

  it('should be created', inject([WcLastMatchService], (service: WcLastMatchService) => {
    expect(service).toBeTruthy();
  }));
});
