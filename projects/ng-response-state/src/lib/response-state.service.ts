import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseState } from './response-state.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseStateService {
  private readonly responseStateTypeSource: BehaviorSubject<ResponseState> = new BehaviorSubject<ResponseState>(ResponseState.none);
  
  public readonly responseState$: Observable<ResponseState> = this.responseStateTypeSource.asObservable();
  public readonly isLoading$: Observable<boolean> = this.isLoading();
  public readonly isError$: Observable<boolean> = this.isError();
  public readonly isSuccess$: Observable<boolean> = this.isSuccess();

  public get responseStateTypes(): typeof ResponseState {
    return ResponseState;
  }

  // Handlers for setting response types

  public setResponseType(type: ResponseState): void {
    this.responseStateTypeSource.next(type);
  }

  public setLoading(): void {
    this.setResponseType(ResponseState.loading);
  }

  public setError(): void {
    this.setResponseType(ResponseState.error);
  }

  public setSuccess(): void {
    this.setResponseType(ResponseState.success);
  }

  // Handlers for checking response types
  private isResponseType(type: ResponseState): Observable<boolean> {
    return this.responseStateTypeSource.pipe(
      map((responseStateType: ResponseState) => responseStateType === type)
    );
  }

  public isLoading(): Observable<boolean> {
    return this.isResponseType(ResponseState.loading);
  }

  public isError(): Observable<boolean> {
    return this.isResponseType(ResponseState.error);
  }

  public isSuccess(): Observable<boolean> {
    return this.isResponseType(ResponseState.success);
  }

}
