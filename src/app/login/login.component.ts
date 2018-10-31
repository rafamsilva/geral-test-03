import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { User } from "src/app/shared/user.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginCheckService } from "../login-check.service";
import { LogStateService } from "../log-state.service";
import { isEmpty } from "lodash";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  public userType: number = 2;
  public user: User;
  public forgotPassword: boolean = true;
  public notRegistred: boolean;
  @ViewChild("msgInvalid")
  msgInvalid: ElementRef;
  public form: FormGroup = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private route: Router,
    private renderer: Renderer2,
    private loginservice: LoginCheckService,
    private data: LogStateService
  ) {}

  ngOnInit() {
  }

  enterUserArea(): void {
    if (!this.form.invalid) {
      let userForm = this.form.value.user;
      let passForm = this.form.value.password;

      this.loginservice.checkUser(userForm, passForm).subscribe(data => {
        this.enterArea(data);
      });
    }
  }

  enterArea(data) {
    this.user = data;
    this.checkEmptyResponse(this.user);
    if (this.validateUserLogin(this.user[0].email, this.user[0].senha)) {
      this.loginservice.userIsAuth();
      this.loginservice.storageUserSession(this.user)
      this.route.navigate(["/area-do-usuario"]);
      this.data.changeStateLogin(true);
    }
  }

  validateUserLogin(name, password): boolean {
    return (
      name === this.form.value.user && password === this.form.value.password
    );
  }

  checkEmptyResponse(response): void {
    if (isEmpty(response)) {
      this.showRegisterMsg();
    }
  }

  showRegisterMsg(): void {
    this.notRegistred = true;
  }
}
