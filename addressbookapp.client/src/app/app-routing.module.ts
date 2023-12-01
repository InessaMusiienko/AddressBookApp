import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesListComponent 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
