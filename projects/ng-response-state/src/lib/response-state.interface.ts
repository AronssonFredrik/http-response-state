export enum ResponseStateType {
    none = 'NONE',
    loading = 'LOADING',
    success = 'SUCCESS',
    error = 'ERROR',
}

export interface ResponseState {
    state: ResponseStateType;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}