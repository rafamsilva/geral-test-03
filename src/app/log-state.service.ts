import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LogStateService{
  private isLogged = new BehaviorSubject(false);
  public atualState = this.isLogged.asObservable();

  constructor() { }

  changeStateLogin(state: boolean) {
    this.isLogged.next(state)
  }
}
