import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecatronicaPage } from './mecatronica.page';

const routes: Routes = [
  {
    path: '',
    component: MecatronicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecatronicaPageRoutingModule {}
