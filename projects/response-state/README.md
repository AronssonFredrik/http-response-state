# Response State
`response-state` is a HTTP response state indicator handling the life-cycle of the service call from loading, successfull to catched error or if it has been initiated. `response-state` was created in mind of handling day-to-day operations of http-services for any Angular RxJS project.


## Usage

### Getting started

```bash
npm install response-state
```

### Usage

#### Service
Begin by extending it to service. Inside the http-request, handle the state as following:

```TypeScript
import { HttpClient } from '@angular/common/http';
import { ResponseStateService } from 'response-state';

@Injectable({
  providedIn: 'root'
})
export class YourService extends ResponseStateService {

  constructor(private http: HttpClient) {
    super();
  }

  fetch() {
    // set responseState$ to loading
    this.setLoading();
    return this.http.get(/*insert url*/)
        .pipe(
            map(() => {
                // set responseState$ to successful
                this.setSuccess();
            }),
            catchError(() => {
                // set responseState$ to Error
                this.setError();
            }),
        );
  }

}
```

#### Component (*.component.ts)
Initiate the request from your component and observe on the response state observable as below.

```TypeScript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponseState } from 'response-state';
import { Observable } from 'rxjs';
import { YourService } from './your.service';

@Component({
  ...
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly service: YourService) { }

  public readonly state$: Observable<ResponseState> = this.service.responseState$;
  public readonly responseStateTypes: typeof ResponseState = this.service.responseStateTypes;

  // Initiater of your fetch function (use however you would like)
  fetch(): void {
    this.service.fetchData();
  }
```

#### Template (*.component.html)
Observe on the state asynchronously and handle loading, success and error cases as needed.

```HTML
<main *ngIf="(state$ | async) as state">
  <your-loading-component *ngIf="state === responseStateTypes.loading"></your-loading-component>
  <your-success-component *ngIf="state === responseStateTypes.success"></your-success-component>
  <your-error-component *ngIf="state === responseStateTypes.error"></your-error-component>
</main>
```


## API

### Operators
| Property        | Description                               |
| -----           | -----                                     |
| setLoading      | Sets the `responseStateType$` to loading  |
| setError        | Sets the `responseStateType$` to error    |
| setSuccess      | Sets the `responseStateType$` to success  |

### Subscriptions

| Property           | Type                            | Description                                                          |
| -----              | -----                           | -----                                                                |
| isLoading$         | `Observable<boolean>`           |  Promise that returns if responseState is set to loading             |
| isError$           | `Observable<boolean>`           |  Promise that returns if responseState is set to error               |
| isSuccess$         | `Observable<boolean>`           |  Promise that returns if responseState is set to success             |
| responseState$     | `Observable<ResponseState>`     |  Promise that returns [`ResponseState`](#responsestate-enum)         |

### Other
| Property             | Type                   | Description                                              |
| -----                | -----                  | -----                                                    |
| responseStateTypes() | `typeof ResponseState` | Returns type of's [`ResponseState`](#responsestate-enum) |

### ResponseState (enum)
| Key     | Description                                                                         |
| -----   | -----                                                                               |
| None    | When the service has not initiated. May be used to reset the state of the response. |
| Loading | Used to check/set state to loading                                                  |
| Success | Used to check/set state to success                                                  |
| Error   | Used to check/set state to error                                                    |
