import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Atendimento', url: '/folder/Atendimento', icon: 'mail' },
    { title: 'Recebido', url: '/folder/Recebido', icon: 'log-in' },
    { title: 'Limpeza', url: '/folder/Limpeza', icon: 'water' },
    { title: 'Retificando', url: '/folder/Retificando', icon: 'hammer' },
    { title: 'Lubrificando', url: '/folder/Lubrificando', icon: 'color-filter' },
    { title: 'Pronto', url: '/folder/Pronto', icon: 'cube' },
    { title: 'Finalizado', url: '/folder/Finalizado', icon: 'log-out' },
  ];
  public labels = ['Caminhão', 'Carro', 'Ford', 'Peças', 'Estoque', 'Esperando'];
  constructor() {}
}
