import { TestBed } from '@angular/core/testing';

import { ResponseStateService } from './response-state.service';

describe('NgServiceResponseStateService', () => {
  let service: ResponseStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
