import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MecatronicaPage } from './mecatronica.page';

describe('MecatronicaPage', () => {
  let component: MecatronicaPage;
  let fixture: ComponentFixture<MecatronicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecatronicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MecatronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
