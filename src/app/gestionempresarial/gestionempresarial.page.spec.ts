import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionempresarialPage } from './gestionempresarial.page';

describe('GestionempresarialPage', () => {
  let component: GestionempresarialPage;
  let fixture: ComponentFixture<GestionempresarialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionempresarialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionempresarialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
