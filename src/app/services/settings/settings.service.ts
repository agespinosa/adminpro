import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark',
  }
  constructor(@Inject(DOCUMENT) private document) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardado en el localStorage', this.ajustes);
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if(localStorage.getItem('ajustes')) {
      this.ajustes= JSON.parse(localStorage.getItem('ajustes'));

      // console.log('cargando localStorage');
      this.aplicarTema( this.ajustes.tema);
    } else {
      // console.log('Usando Valores por defecto');
    }
  }

  aplicarTema(tema: string){
    const url = 'assets/css/colors/'+tema+'.css';
    this.document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema= tema;
    this.ajustes.temaUrl= url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}