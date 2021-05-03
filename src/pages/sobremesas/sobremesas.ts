import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { CardapioItem } from '../../app/interfaces/cardapio'

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {
  sobremesas: CardapioItem[] = [
    {
      nome: 'Fondue de Chocolate',
      desc: 'Uma taça de chocolate, uma porção de morango, banana, kiwi e maçã.',
      img: 'assets/imgs/sobremesas/fondue.jpg',
      preco: 29.85
    },
    {
      nome: 'Petit Gâteau Tradicional',
      desc: 'Duas bolas de sorvete, um pedaço de bolo.',
      img: 'assets/imgs/sobremesas/petitgateau.jpg',
      preco: 27.90
    },
    {
      nome: 'Mousse de Chocolate',
      desc: 'Mousse de chocolate feito com chocolate Nestlé.',
      img: 'assets/imgs/sobremesas/mousse.jpg',
      preco: 19.90
    },
    {
      nome: 'Salada de Frutas',
      desc: 'Salada composta por banana, morango, kiwi, e creme de limão.',
      img: 'assets/imgs/sobremesas/saladadefrutas.jpg',
      preco: 16.90
    },
    {
      nome: 'Gelatina',
      desc: 'Gelatina de morango com leite condensado Moça.',
      img: 'assets/imgs/sobremesas/gelatina.jpg',
      preco: 12.45
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobremesasPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}