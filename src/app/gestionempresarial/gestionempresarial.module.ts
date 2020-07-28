import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionempresarialPageRoutingModule } from './gestionempresarial-routing.module';

import { GestionempresarialPage } from './gestionempresarial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionempresarialPageRoutingModule
  ],
  declarations: [GestionempresarialPage]
})
export class GestionempresarialPageModule {}
