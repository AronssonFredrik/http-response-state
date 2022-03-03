import { TestBed } from '@angular/core/testing';
import { ResponseState, ResponseStateType } from './response-state.interface';

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

  it('should set state to none', () => expect(responseState.state).toBe(ResponseStateType.none));
  it('should NOT be loading', () => expect(responseState.isLoading).toBe(false));
  it('should NOT be error', () => expect(responseState.isError).toBe(false));
  it('should NOT be successfull', () => expect(responseState.isSuccess).toBe(false));

  describe("Response is loading", () => {
    beforeEach(() => service.setLoading());

    it('should set state to loading', () => expect(responseState.state).toBe(ResponseStateType.loading));
    it('should be loading', () => expect(responseState.isLoading).toBe(true));
    it('should NOT be error', () => expect(responseState.isError).toBe(false));
    it('should NOT be successfull', () => expect(responseState.isSuccess).toBe(false));
  });

  describe("Response is succesfull", () => {
    beforeEach(() => service.setSuccess());

    it('should set state to successfull', () => expect(responseState.state).toBe(ResponseStateType.success));
    it('should be loading', () => expect(responseState.isLoading).toBe(false));
    it('should NOT be error', () => expect(responseState.isError).toBe(false));
    it('should NOT be successfull', () => expect(responseState.isSuccess).toBe(true));
  });

  describe("Response is error", () => {
    beforeEach(() => service.setError());

    it('should set state to loading', () => expect(responseState.state).toBe(ResponseStateType.error));
    it('should be loading', () => expect(responseState.isLoading).toBe(false));
    it('should NOT be error', () => expect(responseState.isError).toBe(true));
    it('should NOT be successfull', () => expect(responseState.isSuccess).toBe(false));
  });

});
