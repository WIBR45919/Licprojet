import { TestBed, inject } from '@angular/core/testing';

import { UserInService } from './user-in.service';

describe('UserInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInService]
    });
  });

  it('should be created', inject([UserInService], (service: UserInService) => {
    expect(service).toBeTruthy();
  }));
});