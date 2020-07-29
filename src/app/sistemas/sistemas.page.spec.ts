import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemasPage } from './sistemas.page';

describe('SistemasPage', () => {
  let component: SistemasPage;
  let fixture: ComponentFixture<SistemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
