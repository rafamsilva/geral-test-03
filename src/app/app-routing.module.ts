import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HousesListComponent } from './houses-list/houses-list.component';
import { HomeComponent } from './home/home.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { ConfigurationAreaComponent } from './user-area/configuration-area/configuration-area.component';
import { EmployeesComponent } from './user-area/employees/employees.component';
import { FavoritesComponent } from './user-area/favorites/favorites.component';
import { HousesComponent } from './user-area/houses/houses.component';
import { ClientsComponent } from './user-area/clients/clients.component';
import { RegisterClientComponent } from './user-area/register-client/register-client.component';
import { RegisterEmployeeComponent } from './user-area/register-employee/register-employee.component';
import { RegisterHouseComponent } from './user-area/register-house/register-house.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imoveis', component: HousesListComponent },
  { path: 'area-do-usuario',
    component: UserAreaComponent,
      children: [
        { path: 'favoritos', component: FavoritesComponent },
        { path: 'configurações', component: ConfigurationAreaComponent },
        { path: 'funcionarios', component: EmployeesComponent },
        { path: 'imoveis', component: HousesComponent },
        { path: 'clientes', component: ClientsComponent },
        { path: 'cadastrar-cliente', component: RegisterClientComponent},
        { path: 'cadastrar-funcionario', component: RegisterEmployeeComponent},
        { path: 'cadastrar-imovel', component: RegisterHouseComponent}
      ]
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
