import { ErrorHandlerService } from './../error-handler.service';
import {
  Component,
  OnInit,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginCheckService } from "../login-check.service";
import { LogStateService } from "../log-state.service";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  public registerSuccess: boolean;
  public conectionError: boolean;
  public notRegistred: boolean;
  public form: FormGroup = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private route: Router,
    private loginservice: LoginCheckService,
    private loginStateService: LogStateService,
    private errorService: ErrorHandlerService
    ) {}

    ngOnInit() {
      this.loginStateService.isRegistred.subscribe(state => this.registerSuccess = state)
    }


    enterUserArea(): void {
      if (!this.form.invalid) {
        let userForm = this.form.value.user;
        let passForm = this.form.value.password;

        this.loginservice.tryLogin(userForm, passForm).subscribe(
          data => this.validateToken(data),
          error => this.errorService.error.subscribe(state => this.conectionError = state)
          );
      }
    }

    validateToken(data) {
      if(data.token !== undefined){
        this.loginservice.saveUserData(data)
        this.loginservice.userIsAuth();
        this.route.navigate(["/area-do-usuario"]);
        this.loginStateService.changeStateLogin(true);
      }else{
        this.showInvalidLoginMsg()
      }

    }

    showInvalidLoginMsg(): void {
      this.notRegistred = true;
    }

  }
