import { Component } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Card } from 'src/models/Card';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  public portugues = environment.portugues;
  public codesnum = environment.codesnum;

  diaAtual = new Date().toLocaleDateString('pt-br', { weekday: 'long' });
  currentDay = new Date().toLocaleDateString('en', { weekday: 'long' });

  hora = new Date().getHours();
  desejo = `${(this.hora < 12 && 'Bom Dia') || (this.hora < 17 && 'Boa Tarde') || 'Boa Noite'} ! `;
  wish = `${(this.hora < 12 && 'Good Morning') || (this.hora < 17 && 'Good Afternoon') || 'Good Evening'}! `;

  horaAtual!: string;
  currentTime!: string;

   capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString('en');
      this.horaAtual = new Date().toLocaleTimeString('pt-br');
      this.portugues = environment.portugues;
      this.codesnum = environment.codesnum;
    }, 1);
  }

}
