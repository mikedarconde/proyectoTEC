import { Component, OnInit } from '@angular/core';
import { AlertController, IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.page.html',
  styleUrls: ['./informatica.page.scss'],
})
export class InformaticaPage implements OnInit {

  constructor(public alerta: AlertController) {}

 

  ngOnInit() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block" ) {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
      }
      async altObjetivoGeneral() {
        const alert = await this.alerta.create({
        
          cssClass : 'styleAlert' ,
          header: 'Objetivo General',
          subHeader: 'Formar profesionales competentes en el diseño, desarrollo, implementación y administración de servicios informáticos y gestión de proyectos con una visión sistémica, tecnológica y estratégica, ofreciendo soluciones innovadoras e integrales a las organizaciones, de acuerdo con las necesidades globales, actuales y emergentes, comprometidos con su entorno, desempeñándose con actitud ética, emprendedora y de liderazgo.',
         
        });
        await alert.present();

      }
    
    async altMision() {
      const alert = await this.alerta.create({
      
        cssClass : 'styleAlert' ,
        header: 'Misión',
        subHeader: 'La División de ingeniería Informática tiene como Misión, formar profesionales competentes en el diseño, desarrollo, implementación y administración de proyectos informáticos con un enfoque tecnológico y de calidad; ofreciendo soluciones innovadoras, integrales y de vanguardia para las organizaciones, con el compromiso sustentable de su entorno y desempeñándose con actitud ética, emprendedora y de liderazgo.',
       
      });
      await alert.present();

    }
    async altVision() {
      const alert = await this.alerta.create({
      
        cssClass : 'styleAlert' ,
        header: 'Visión',
        subHeader: 'Ser la carrera con perfil tecnológico más reconocida en la región de Teziutlán, Puebla, que ofrezca un proceso de enseñanza-aprendizaje certificado y acreditado, comprometida en la construcción e implementación de soluciones Informáticas de vanguardia, así como la formación integral del alumnado, contribuyendo al desarrollo generalizado y sustentable de las organizaciones en la región.',
       
      });
      await alert.present();

    }

 
      
  }



