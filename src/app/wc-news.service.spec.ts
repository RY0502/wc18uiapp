import { TestBed, inject } from '@angular/core/testing';

import { WcNewsService } from './wc-news.service';

describe('WcNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcNewsService]
    });
  });

  it('should be created', inject([WcNewsService], (service: WcNewsService) => {
    expect(service).toBeTruthy();
  }));
});
