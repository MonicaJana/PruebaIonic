import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})
export class Tab2Page {
  fechaInicio: string = '';
  fechaFin: string = '';
  diferenciaDias: number | null = null;

  calcularDiferencia() {
    if (this.fechaInicio && this.fechaFin) {
      const fecha1 = new Date(this.fechaInicio);
      const fecha2 = new Date(this.fechaFin);
      const diferenciaTiempo = Math.abs(fecha2.getTime() - fecha1.getTime());
      this.diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    } else {
      this.diferenciaDias = null;
    }
  }

  constructor() {}

}
