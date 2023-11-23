import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/enviroments/enviroment';
import { Card } from 'src/models/Card';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-all-codes',
  templateUrl: './all-codes.component.html',
  styleUrls: ['./all-codes.component.css']
})
export class AllCodesComponent implements OnInit {

  public cards!: Card[];
  public portugues = environment.portugues;
  currentIndex = 0;
  sucesso!: boolean;
  editar!: boolean;
  delete!: boolean;
  popupAberto!: boolean;
  loader = true;
  primeiravez = true;
  codeForm!: FormGroup;


  constructor(private fb: FormBuilder, private cardService: CardService, private spinner: NgxSpinnerService) {
    this.criarForm();
  }

  criarForm() {
    this.codeForm = this.fb.group({
      id: [''],
      link: [''],
      description: ['', Validators.required],
      createdAt: [new Date()]
    });
  }

  cardSelect(card: Card) {
    this.codeForm.patchValue({
      id: card.id,
      link: card.link,
      description: card.description,
      createdAt: card.createdAt
    });
  }

  ngOnInit() {
    this.carregarCodes();
  }

  carregarCodes() {
    this.cardService.getAll().subscribe(
      (cards: Card[]) => {
        this.cards = cards;
        environment.codesnum = cards.length;
        this.primeiravez = true;
        setTimeout(() => {
          this.loader = false;
        }, 3000);
      },
      (erro: any) => {
        // console.error(erro);
      }
    );
  }

  cardsAnteriores() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 2;
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 500);
      this.primeiravez = false;
    }
  }

  proximosCards() {
    if (this.currentIndex < this.cards.length - 2) {
      this.currentIndex += 2;
      if (this.primeiravez == true) {
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 3000);
      }
      else {
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 500);
      }
    }
  }

  deletarQRCode(id: number) {
    this.popupAberto = true;
    document.getElementsByClassName("popup-confirm")[0].classList.add("active");
    document.getElementById("dismiss-popup-btn-confirm")?.addEventListener('click', () => {
      this.fecharPopUpConfirm();
      this.editar = false;
      setTimeout(() => {
        this.cardService.delete(id).subscribe(
          (model: any) => {
            this.sucesso = true;
            // console.log(model);
            this.carregarCodes();
          },
          (erro: HttpErrorResponse) => {
            if (erro.status === 404) {
              this.sucesso = false;
              // console.log("404 status code caught");
            }
          }
        )
      }, 100);
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        setTimeout(() => {
          this.popupAberto = true;
          document.getElementsByClassName("popup")[0].classList.add("active");
        }, 200);
      }, 1000);
    });

  }

  editarQRCode(card: Card) {
    this.cardSelect(card);
    this.popupAberto = true;
    this.editar = true;
    document.getElementsByClassName("popup-edit")[0].classList.add("active");
    document.getElementById("dismiss-popup-btn-edit")?.addEventListener('click', () => {
      card = this.codeForm.value;
      this.cardService.put(card).subscribe(
        (model: any) => {
          this.sucesso = true;
          // console.log(model);
          this.carregarCodes();
          this.fecharPopUpEdit();
        },
        (erro: any) => {
          this.sucesso = false;
          // console.log(erro);
          this.fecharPopUpEdit();
        }
      );
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        setTimeout(() => {
          this.popupAberto = true;
          document.getElementsByClassName("popup")[0].classList.add("active");
        }, 200);
      }, 1000);
    });
  }

  fecharPopUp() {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    this.popupAberto = false;
  }
  fecharPopUpConfirm() {
    document.getElementsByClassName("popup-confirm")[0].classList.remove("active");
    this.popupAberto = false;
  }
  fecharPopUpEdit() {
    document.getElementsByClassName("popup-edit")[0].classList.remove("active");
    this.popupAberto = false;
  }

}
