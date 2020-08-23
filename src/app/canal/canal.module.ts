import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanalPageRoutingModule } from './canal-routing.module';

import { CanalPage } from './canal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanalPageRoutingModule
  ],
  declarations: [CanalPage]
})
export class CanalPageModule {}
