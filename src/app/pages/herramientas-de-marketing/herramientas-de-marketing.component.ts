import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-herramientas-de-marketing',
  templateUrl: './herramientas-de-marketing.component.html',
  styleUrls: ['./herramientas-de-marketing.component.scss']
})
export class HerramientasDeMarketingComponent {
  constructor(
    private location: Location
  ) { }
  goBack() {
    this.location.back();
  }
}
