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
      ]
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
