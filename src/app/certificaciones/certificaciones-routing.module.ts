import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificacionesPage } from './certificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: CertificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificacionesPageRoutingModule {}
