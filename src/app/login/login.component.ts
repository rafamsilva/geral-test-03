import { ErrorHandlerService } from './../error-handler.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
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
  @ViewChild("msgInvalid")
  msgInvalid: ElementRef;
  public form: FormGroup = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private route: Router,
    private loginservice: LoginCheckService,
    private data: LogStateService,
    private errorService: ErrorHandlerService
    ) {}

    ngOnInit() {
      this.data.isRegistred.subscribe(state => this.registerSuccess = state)
    }


    enterUserArea(): void {
      if (!this.form.invalid) {
        let userForm = this.form.value.user;
        let passForm = this.form.value.password;

        this.loginservice.checkUser(userForm, passForm).subscribe(
          data => this.enterArea(data),
          error => this.errorService.error.subscribe(state => this.conectionError = state)
          );
      }
    }

    enterArea(data) {
      if(data.token !== undefined){
        this.loginservice.saveUserData(data)
        this.loginservice.userIsAuth();
        this.route.navigate(["/area-do-usuario"]);
        this.data.changeStateLogin(true);
      }else{
        this.showRegisterMsg()
      }

    }

    showRegisterMsg(): void {
      this.notRegistred = true;
    }

  }
