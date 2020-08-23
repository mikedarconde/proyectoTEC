import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificacionesPageRoutingModule } from './certificaciones-routing.module';

import { CertificacionesPage } from './certificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificacionesPageRoutingModule
  ],
  declarations: [CertificacionesPage]
})
export class CertificacionesPageModule {}
