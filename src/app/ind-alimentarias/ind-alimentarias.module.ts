import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndAlimentariasPageRoutingModule } from './ind-alimentarias-routing.module';

import { IndAlimentariasPage } from './ind-alimentarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndAlimentariasPageRoutingModule
  ],
  declarations: [IndAlimentariasPage]
})
export class IndAlimentariasPageModule {}
