import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanalPage } from './canal.page';

const routes: Routes = [
  {
    path: '',
    component: CanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanalPageRoutingModule {}
