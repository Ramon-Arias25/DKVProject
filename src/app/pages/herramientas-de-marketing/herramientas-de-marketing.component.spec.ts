import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasDeMarketingComponent } from './herramientas-de-marketing.component';

describe('HerramientasDeMarketingComponent', () => {
  let component: HerramientasDeMarketingComponent;
  let fixture: ComponentFixture<HerramientasDeMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientasDeMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientasDeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
