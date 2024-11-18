import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-equipo-de-investigacion',
  templateUrl: './equipo-de-investigacion.component.html',
  styleUrls: ['./equipo-de-investigacion.component.scss']
})
export class EquipoDeInvestigacionComponent {
  constructor(
    private location: Location
  ) { }
  goBack() {
    this.location.back();
  } 
}