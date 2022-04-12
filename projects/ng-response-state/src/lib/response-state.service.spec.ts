import { TestBed } from '@angular/core/testing';
import { ResponseState } from './response-state.interface';

import { ResponseStateService } from './response-state.service';

describe('NgResponseStateService', () => {
  let service: ResponseStateService;
  let responseState: ResponseState;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseStateService);
    await service.responseState$.subscribe((type) => responseState = type);
  });

  it('should be created', () => expect(service).toBeTruthy());

  it('should set state to none', () => expect(responseState).toBe(ResponseState.none));

  describe("Response is loading", () => {
    beforeEach(() => service.setLoading());

    it('should set state to loading', () => expect(responseState).toBe(ResponseState.loading));
  });

  describe("Response is succesfull", () => {
    beforeEach(() => service.setSuccess());

    it('should set state to successfull', () => expect(responseState).toBe(ResponseState.success));
  });

  describe("Response is error", () => {
    beforeEach(() => service.setError());

    it('should set state to loading', () => expect(responseState).toBe(ResponseState.error));
  });

});
