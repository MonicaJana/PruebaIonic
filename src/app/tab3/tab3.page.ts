import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  calcularRaices() {
    const discriminante = this.b * this.b - 4 * this.a * this.c;

    if (this.a === 0) {
      this.resultado = 'El coeficiente "a" no puede ser cero en una ecuación cuadrática.';
      return;
    }

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = `Las raíces son: x1 = ${raiz1} y x2 = ${raiz2}`;
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = `La ecuación tiene una raíz doble: x = ${raiz}`;
    } else {
      this.resultado = 'La ecuación no tiene raíces reales.';
    }
  }
  constructor() {}

}
