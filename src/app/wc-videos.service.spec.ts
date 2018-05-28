import { TestBed, inject } from '@angular/core/testing';

import { WcVideosService } from './wc-videos.service';

describe('WcVideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcVideosService]
    });
  });

  it('should be created', inject([WcVideosService], (service: WcVideosService) => {
    expect(service).toBeTruthy();
  }));
});
