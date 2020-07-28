import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustrialPage } from './industrial.page';

const routes: Routes = [
  {
    path: '',
    component: IndustrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustrialPageRoutingModule {}
