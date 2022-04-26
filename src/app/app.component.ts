import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponseState } from 'response-state';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  constructor(private readonly service: AppService) {
    this.fetchMock();
  }


  public readonly state$: Observable<ResponseState> = this.service.responseState$;

  public readonly responseStateTypes: typeof ResponseState = this.service.responseStateTypes;

  handleSetState(stateType: ResponseState): void {
    this.service.setResponseType(stateType);
  }

  fetchMock(): void {
    this.service.fetchData();
  }

  

}
