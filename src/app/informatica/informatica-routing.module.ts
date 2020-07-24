import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformaticaPage } from './informatica.page';

const routes: Routes = [
  {
    path: '',
    component: InformaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformaticaPageRoutingModule {}
