import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HousesListComponent } from './houses-list/houses-list.component';
import { HomeComponent } from './home/home.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { ConfigurationAreaComponent } from './user-area/configuration-area/configuration-area.component';
import { RegisterEmployeeComponent } from './user-area/register-employee/register-employee.component';
import { RegisterHouseComponent } from './user-area/register-house/register-house.component';
import { RemoveHouseComponent } from './user-area/remove-house/remove-house.component';
import { FavoritesComponent } from './user-area/favorites/favorites.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imoveis', component: HousesListComponent },
  { path: 'area-do-usuario',
    component: UserAreaComponent,
      children: [
        { path: 'favoritos', component: FavoritesComponent },
        { path: 'configurações', component: ConfigurationAreaComponent },
        { path: 'cadastrar-funcionario', component: RegisterEmployeeComponent },
        { path: 'cadastrar-imovel', component: RegisterHouseComponent },
        { path: 'remover-imovel', component: RemoveHouseComponent },
      ]
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
