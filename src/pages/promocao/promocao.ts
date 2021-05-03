import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { CardapioItem } from '../../app/interfaces/cardapio';

@IonicPage()
@Component({
  selector: 'page-promocao',
  templateUrl: 'promocao.html',
})
export class PromocaoPage {
  promocao: CardapioItem[] = [
    {
      nome: 'Caldo de Mandioquinha, Filé de Frango à Milanesa e Salada de Frutas',
      desc: '',
      img: '',
      preco: 48.90
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocaoPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}