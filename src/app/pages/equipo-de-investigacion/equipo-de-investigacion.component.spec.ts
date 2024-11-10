import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDeInvestigacionComponent } from './equipo-de-investigacion.component';

describe('EquipoDeInvestigacionComponent', () => {
  let component: EquipoDeInvestigacionComponent;
  let fixture: ComponentFixture<EquipoDeInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoDeInvestigacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoDeInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
