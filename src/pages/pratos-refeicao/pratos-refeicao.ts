import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { CardapioItem } from '../../app/interfaces/cardapio'

@IonicPage()
@Component({
  selector: 'page-pratos-refeicao',
  templateUrl: 'pratos-refeicao.html',
})
export class PratosRefeicaoPage {
  pratosRefeicao: CardapioItem[] = [
    {
      nome: 'Bife à Parmegiana',
      desc: 'Acompanha uma porção de arroz, feijão, alface, tomate e um pedaço de bife à parmegiana, feito com filé mignon, mussarela e queijo parmesão.',
      img: 'assets/imgs/refeicao/bife.jpg',
      preco: 45.90
    },
    {
      nome: 'Feijoada Completa',
      desc: 'Acompanha arroz, feijoada, couve refogada, farofa pronta Yoki e vinagrete. Feijoada composta por feijão preto, linguiça calabresa Aurora, carne seca e bacon.',
      img: 'assets/imgs/refeicao/feijoada.jpg',
      preco: 36.90
    },
    {
      nome: 'Strogonoff de Frango',
      desc: 'Acompanha uma porção de arroz e strogonoff de frango.',
      img: 'assets/imgs/refeicao/strogonoff.jpg',
      preco: 26.70
    },
    {
      nome: 'Filé de Frango à Milanesa',
      desc: 'Porção de arroz, feijão, dois pedaços de frango à milanesa, tomate e alface.',
      img: 'assets/imgs/refeicao/milanesa.jpg',
      preco: 24.40
    },
    {
      nome: 'Calabresa Acebolada',
      desc: 'Porção de arroz, feijão, linguiça calabresa Aurora, cebola.',
      img: 'assets/imgs/refeicao/calabresa.jpg',
      preco: 22.85
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratosRefeicaoPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}