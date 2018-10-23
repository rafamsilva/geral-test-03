import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { UserAreaRoutingModule } from "./user-area-routing.module";


import { UserAreaComponent } from "./user-area.component";
import { ConfigurationAreaComponent } from "./configuration-area/configuration-area.component";
import { EmployeesComponent } from "./employees/employees.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { HousesComponent } from "./houses/houses.component";
import { ClientsComponent } from "./clients/clients.component";
import { RegisterClientComponent } from "./register-client/register-client.component";
import { RegisterEmployeeComponent } from "./register-employee/register-employee.component";
import { RegisterHouseComponent } from "./register-house/register-house.component";





@NgModule({
    declarations: [
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
      CommonModule,
      UserAreaRoutingModule,
      ReactiveFormsModule,
      HttpModule
    ],
})
export class UserAreaModule{

}
