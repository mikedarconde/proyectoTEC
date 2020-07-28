import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndustrialPageRoutingModule } from './industrial-routing.module';

import { IndustrialPage } from './industrial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndustrialPageRoutingModule
  ],
  declarations: [IndustrialPage]
})
export class IndustrialPageModule {}
