import { TestBed } from '@angular/core/testing';

import { EmailerService } from './emailer.service';

describe('EmailerService', () => {
  let service: EmailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
