import { TestBed } from '@angular/core/testing';

import { ConverterElementsService } from './converter-elements.service';

describe('ConverterElementsService', () => {
  let service: ConverterElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
