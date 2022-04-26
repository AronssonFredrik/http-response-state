import { Injectable } from '@angular/core';
import { ResponseStateService } from 'response-state';
import { timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService extends ResponseStateService {

  constructor() {
    super();
  }

  fetchData() {
    this.setLoading();
    return timer(1200).subscribe(() => this.setSuccess());
  }

}
