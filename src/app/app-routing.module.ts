import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HousesListComponent } from './houses-list/houses-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login-register/login-register.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imoveis', component: HousesListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'novo-cadastro', component: LoginRegisterComponent},
  { path: 'area-do-usuario', loadChildren: './user-area/user-area.module#UserAreaModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
