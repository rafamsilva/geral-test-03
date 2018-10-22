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
import { EmployeesComponent } from './user-area/employees/employees.component';
import { FavoritesComponent } from './user-area/favorites/favorites.component';
import { HousesComponent } from './user-area/houses/houses.component';
import { ClientsComponent } from './user-area/clients/clients.component';
import { RegisterClientComponent } from './user-area/register-client/register-client.component';
import { RegisterEmployeeComponent } from './user-area/register-employee/register-employee.component';
import { RegisterHouseComponent } from './user-area/register-house/register-house.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HousesListComponent,
    UserAreaComponent,
    ConfigurationAreaComponent,
    EmployeesComponent,
    FavoritesComponent,
    HousesComponent,
    ClientsComponent,
    RegisterClientComponent,
    RegisterEmployeeComponent,
    RegisterHouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
