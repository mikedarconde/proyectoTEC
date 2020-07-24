import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformaticaPageRoutingModule } from './informatica-routing.module';

import { InformaticaPage } from './informatica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformaticaPageRoutingModule
  ],
  declarations: [InformaticaPage]
})
export class InformaticaPageModule {}
