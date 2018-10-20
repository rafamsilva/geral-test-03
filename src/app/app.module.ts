import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HousesListComponent } from './houses-list/houses-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAreaComponent } from './user-area/user-area.component';
import { ConfigurationAreaComponent } from './user-area/configuration-area/configuration-area.component';
import { RegisterHouseComponent } from './user-area/register-house/register-house.component';
import { RegisterEmployeeComponent } from './user-area/register-employee/register-employee.component';
import { FavoritesComponent } from './user-area/favorites/favorites.component';
import { RemoveHouseComponent } from './user-area/remove-house/remove-house.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HousesListComponent,
    UserAreaComponent,
    ConfigurationAreaComponent,
    RegisterHouseComponent,
    RegisterEmployeeComponent,
    FavoritesComponent,
    RemoveHouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
