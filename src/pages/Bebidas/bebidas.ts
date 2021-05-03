import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { CardapioItem } from '../../app/interfaces/cardapio'

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {
  bebidas: CardapioItem[] = [
    {
      nome: "Coca-Cola 2L",
      desc: '',
      img: 'assets/imgs/bebidas/coca.jpg',
      preco: 10.90
    },
    {
      nome: "Fanta Laranja 2L",
      desc: '',
      img: 'assets/imgs/bebidas/fanta.jpg',
      preco: 9.90
    },
    {
      nome: "Suco de Laranja Prats 900ml",
      desc: '',
      img: 'assets/imgs/bebidas/suco.jpg',
      preco: 9.90
    },
    {
      nome: "Coca-Cola Zero 600ml",
      desc: '',
      img: 'assets/imgs/bebidas/cocazero.jpg',
      preco: 8.50
    },
    {
      nome: "Água com gás Crystal 500ml",
      desc: '',
      img: 'assets/imgs/bebidas/agua.jpg',
      preco: 4.59
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}