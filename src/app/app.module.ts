import { ErrorHandlerService } from './error-handler.service';
import { UserService } from './user.service';
import { RecoveryPasswordService } from './recovery-password.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HousesListComponent } from './houses-list/houses-list.component';
import { AppRoutingModule } from './app-routing.module';


import { LoginCheckService } from './login-check.service';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HousesService } from './houses.service';
import { LogStateService } from './log-state.service';
import { AutenticationService } from './user-area/autentication.service';
import { Interceptor } from './auth/interceptor.module';
import { TypingService } from './typing.service';
import { FavoriteService } from './favorite.service';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HousesListComponent,
    LoginComponent,
    LoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Interceptor
  ],
  providers: [
    LoginCheckService,
    HousesService,
    LogStateService,
    RecoveryPasswordService,
    AutenticationService,
    UserService,
    ErrorHandlerService,
    TypingService,
    FavoriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
