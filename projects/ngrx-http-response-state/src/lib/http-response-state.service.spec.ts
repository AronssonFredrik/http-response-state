import { TestBed } from '@angular/core/testing';

import { NgrxHttpResponseStateService } from './http-response-state.service';

describe('NgrxHttpResponseStateService', () => {
  let service: NgrxHttpResponseStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxHttpResponseStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
