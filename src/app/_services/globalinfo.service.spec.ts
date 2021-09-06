import { TestBed, inject } from '@angular/core/testing';

import { GlobalinfoService } from './globalinfo.service';

describe('GlobalinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalinfoService]
    });
  });

  it('should be created', inject([GlobalinfoService], (service: GlobalinfoService) => {
    expect(service).toBeTruthy();
  }));
});