import { Injectable } from "@angular/core";


@Injectable()
export class ErrorHandlerService{
  private error: any;
  constructor(){

  }

  setErrorMsg(msg){
    this.error = msg
  }

  getErrorMsg(): string{
    return this.error
  }

  loginError(error){
    this.setErrorMsg(error.status)
  }

}
