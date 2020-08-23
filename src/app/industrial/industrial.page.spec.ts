import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndustrialPage } from './industrial.page';

describe('IndustrialPage', () => {
  let component: IndustrialPage;
  let fixture: ComponentFixture<IndustrialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndustrialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
