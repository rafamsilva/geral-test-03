import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HousesListComponent } from './houses-list/houses-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imoveis', component: HousesListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
