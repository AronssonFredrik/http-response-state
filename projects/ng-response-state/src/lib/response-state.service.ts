import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { ResponseState, ResponseStateType } from './response-state.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseStateService {
  private readonly responseStateTypeSource: BehaviorSubject<ResponseStateType> = new BehaviorSubject<ResponseStateType>(ResponseStateType.none);
  
  public readonly responseStateType$: Observable<ResponseStateType> = this.responseStateTypeSource.asObservable();
  public readonly isLoading$: Observable<boolean> = this.isLoading();
  public readonly isError$: Observable<boolean> = this.isError();
  public readonly isSuccess$: Observable<boolean> = this.isSuccess();

  public readonly responseState$: Observable<ResponseState> = combineLatest([
      this.responseStateType$,
      this.isLoading$,
      this.isError$,
      this.isSuccess$,
    ]).pipe(map(([
      state,
      isLoading,
      isError,
      isSuccess
    ]) => {
      return {
        state,
        isLoading,
        isError,
        isSuccess 
      }
    })
  );


  // Handlers for setting response types

  public setResponseType(type: ResponseStateType): void {
    this.responseStateTypeSource.next(type);
  }

  public setLoading(): void {
    this.setResponseType(ResponseStateType.loading);
  }

  public setError(): void {
    this.setResponseType(ResponseStateType.error);
  }

  public setSuccess(): void {
    this.setResponseType(ResponseStateType.success);
  }

  // Handlers for checking response types
  private isResponseType(type: ResponseStateType): Observable<boolean> {
    return this.responseStateTypeSource.pipe(
      map((responseStateType: ResponseStateType) => responseStateType === type)
    );
  }

  public isLoading(): Observable<boolean> {
    return this.isResponseType(ResponseStateType.loading);
  }

  public isError(): Observable<boolean> {
    return this.isResponseType(ResponseStateType.error);
  }

  public isSuccess(): Observable<boolean> {
    return this.isResponseType(ResponseStateType.success);
  }

}
