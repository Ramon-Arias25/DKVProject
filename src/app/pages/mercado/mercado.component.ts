import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class MercadoComponent {
  constructor(
    private location: Location
  ) { }
  goBack() {
    this.location.back();
  }
}
