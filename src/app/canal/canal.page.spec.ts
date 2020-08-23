import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanalPage } from './canal.page';

describe('CanalPage', () => {
  let component: CanalPage;
  let fixture: ComponentFixture<CanalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
