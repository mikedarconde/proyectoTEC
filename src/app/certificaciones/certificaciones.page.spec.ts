import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificacionesPage } from './certificaciones.page';

describe('CertificacionesPage', () => {
  let component: CertificacionesPage;
  let fixture: ComponentFixture<CertificacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
