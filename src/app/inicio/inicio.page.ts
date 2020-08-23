import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  public ocultar1: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }

  public ocultar2: boolean = false;
  accion2(){
  this.ocultar2 = !this.ocultar2;
  }
  public ocultar3: boolean = false;
  accion3(){
  this.ocultar3 = !this.ocultar3;
  }
  public ocultar4: boolean = false;
  accion4(){
  this.ocultar4 = !this.ocultar4;
  }
  public ocultar5: boolean = false;
  accion5(){
  this.ocultar5 = !this.ocultar5;
  }
  public ocultar6: boolean = false;
  accion6(){
  this.ocultar6 = !this.ocultar6;
  }
  public ocultar7: boolean = false;
  accion7(){
  this.ocultar7 = !this.ocultar7;
  }
}
