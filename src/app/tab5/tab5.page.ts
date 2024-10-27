import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  texto: string = '';

  constructor() {}

  async guardarTexto() {
    try {
      await Filesystem.writeFile({
        path: 'archivo_texto.txt',
        data: this.texto,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      alert('Texto guardado exitosamente');
    } catch (error) {
      console.error('Error al guardar el archivo', error);
      alert('Hubo un error al guardar el texto');
    }
  }

}
