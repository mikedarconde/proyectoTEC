import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndAlimentariasPage } from './ind-alimentarias.page';

describe('IndAlimentariasPage', () => {
  let component: IndAlimentariasPage;
  let fixture: ComponentFixture<IndAlimentariasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndAlimentariasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndAlimentariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
