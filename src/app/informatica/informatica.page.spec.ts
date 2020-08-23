import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformaticaPage } from './informatica.page';

describe('InformaticaPage', () => {
  let component: InformaticaPage;
  let fixture: ComponentFixture<InformaticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformaticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
