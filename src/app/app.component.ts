import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponseState, ResponseStateType } from 'ng-response-state';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  constructor(private readonly service: AppService) { }

  public get responseState(): typeof ResponseStateType {
    return ResponseStateType;
  }

  public readonly state$: Observable<ResponseState> = this.service.responseState$;

  handleSetState(stateType: ResponseStateType): void {
    this.service.setResponseType(stateType);
  }

  fetchMock(): void {
    this.service.fetchData();
  }

}
