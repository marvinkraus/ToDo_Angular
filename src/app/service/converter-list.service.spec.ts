import { TestBed } from '@angular/core/testing';

import { ConverterListService } from './converter-list.service';

describe('ConverterListService', () => {
  let service: ConverterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
