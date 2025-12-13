import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {

  private routeChange : Subject<string> = new Subject<string>();

  checkCurrentRoute() {
    this.routeChange.next(window.location.pathname);
  }

  getCurrentRoute() {
    return this.routeChange;
  }

}
