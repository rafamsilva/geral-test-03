import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FavoritesComponent } from './favorites/favorites.component';
import { ConfigurationAreaComponent } from './configuration-area/configuration-area.component';
import { EmployeesComponent } from './employees/employees.component';
import { HousesComponent } from './houses/houses.component';
import { ClientsComponent } from './clients/clients.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RegisterHouseComponent } from './register-house/register-house.component';
import { UserAreaComponent } from './user-area.component';
import { AutenticationService } from './autentication.service';


const routes: Routes = [
    { path: '', component: UserAreaComponent, canActivate: [ AutenticationService ],
      children: [
        { path: 'favoritos', component: FavoritesComponent },
        { path: 'configurações', component: ConfigurationAreaComponent },
        { path: 'funcionarios', component: EmployeesComponent },
        { path: 'imoveis', component: HousesComponent },
        { path: 'clientes', component: ClientsComponent },
        { path: 'cadastrar-cliente', component: RegisterClientComponent},
        { path: 'cadastrar-funcionario', component: RegisterEmployeeComponent},
        { path: 'cadastrar-imovel', component: RegisterHouseComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAreaRoutingModule { }
