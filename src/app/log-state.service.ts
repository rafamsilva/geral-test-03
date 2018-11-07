import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LogStateService{
  private userName = new BehaviorSubject('')
  public actualName = this.userName.asObservable();
  private registerSuccess = new BehaviorSubject(false)
  public isRegistred = this.registerSuccess.asObservable();
  private isLogged = new BehaviorSubject(false);
  public atualState = this.isLogged.asObservable();

  constructor() { }

  changeStateLogin(state: boolean) {
    this.isLogged.next(state)
  }

  setRegisterMsg(state: boolean){
    this.registerSuccess.next(state)
  }

  setUserName(name: string){
    this.userName.next(name)
  }
}
