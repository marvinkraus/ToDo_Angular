import { TestBed } from '@angular/core/testing';

import { RestSingleService } from './rest-single.service';

describe('RestSingleService', () => {
  let service: RestSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
