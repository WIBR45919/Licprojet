import { TestBed, inject } from '@angular/core/testing';

import { SpinnerInterceptorService } from './spinner-interceptor.service';

describe('SpinnerInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerInterceptorService]
    });
  });

  it('should be created', inject([SpinnerInterceptorService], (service: SpinnerInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});