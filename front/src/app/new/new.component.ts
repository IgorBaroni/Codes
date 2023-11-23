import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/enviroments/enviroment';
import { Card } from 'src/models/Card';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  public portugues = environment.portugues;
  url = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="
  sucesso!: boolean;
  public cardForm!: FormGroup;
  popupAberto!: boolean;

  constructor(private fb: FormBuilder, private cardService: CardService, private spinner: NgxSpinnerService) {
    this.criarForm();
  }

  criarForm() {
    this.cardForm = this.fb.group({
      link: ['', Validators.required],
      description: ['', Validators.required],
      createdAt: [new Date()]
    });
  }

  cardSubmit() {
    this.popupAberto = true;
    this.criarCode(this.cardForm.value);
    this.cardForm.get('link')?.reset();
    this.cardForm.get('description')?.reset();
  }

  criarCode(card: Card) {
    if(card.link != null){
      card.link = this.url+card.link;
    } else { card.link = ""}
    this.cardService.post(card).subscribe(
      (retorno: any) => {
        this.sucesso = true;
        console.log(retorno);
      },
      (erro: any) => {
        this.sucesso = false;
        // console.log(erro);
      }
    )
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      setTimeout(() => {
        document.getElementsByClassName("popup")[0].classList.add("active");
      }, 200);
    }, 1000);
  }

  fecharPopUp() {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    this.popupAberto = false;
  }

}
