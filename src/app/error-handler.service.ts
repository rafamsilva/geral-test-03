import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ErrorHandlerService{
  public errorMsg = new BehaviorSubject(false);
  public error = this.errorMsg.asObservable()

  constructor(){

  }

  showMsgError(state){
    this.errorMsg.next(state)
  }

  setErrorMsg(msg){
    if(msg === 0){
      this.showMsgError(true)
    }
  }

  loginError(error){
    this.setErrorMsg(error.status)
  }

}
