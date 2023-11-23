import { Component, HostBinding, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Card } from 'src/models/Card';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public cards!: Card[];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.carregarCodes();
  }

  carregarCodes() {
    this.cardService.getAll().subscribe(
      (cards: Card[]) => {
        environment.codesnum = cards.length;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
}
