
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuController } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'informatica',
    loadChildren: () => import('./informatica/informatica.module').then( m => m.InformaticaPageModule)
  },
  {
    path: 'mecatronica',
    loadChildren: () => import('./mecatronica/mecatronica.module').then( m => m.MecatronicaPageModule)
  },
  {
    path: 'industrial',
    loadChildren: () => import('./industrial/industrial.module').then( m => m.IndustrialPageModule)
  },
  {
    path: 'sistemas',
    loadChildren: () => import('./sistemas/sistemas.module').then( m => m.SistemasPageModule)
  },
  {
    path: 'gestionempresarial',
    loadChildren: () => import('./gestionempresarial/gestionempresarial.module').then( m => m.GestionempresarialPageModule)
  },
  {
    path: 'ind-alimentarias',
    loadChildren: () => import('./ind-alimentarias/ind-alimentarias.module').then( m => m.IndAlimentariasPageModule)
  },
  {
    path: 'certificaciones',
    loadChildren: () => import('./certificaciones/certificaciones.module').then( m => m.CertificacionesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,
            MenuController]
})
export class AppRoutingModule { }
