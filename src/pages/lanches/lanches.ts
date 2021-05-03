import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { CardapioItem } from '../../app/interfaces/cardapio'

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {
  lanches: CardapioItem[] = [
    {
      nome: "Hot Dog",
      desc: 'Pão, maionese Hellmanns, salsicha Sadia, purê de batata e batata palha.',
      img: 'assets/imgs/lanches/hotdog.jpg',
      preco: 7.20
    },
    {
      nome: "X-Salada",
      desc: 'Pão, hambúrguer, queijo mussarela, alface, tomate.',
      img: 'assets/imgs/lanches/xsalada.jpg',
      preco: 9.70
    },
    {
      nome: "X-Burguer",
      desc: 'Pão, hambúrguer, maionese e queijo mussarela.',
      img: 'assets/imgs/lanches/xburguer.jpg',
      preco: 13.20
    },
    {
      nome: "X-Bacon",
      desc: 'Pão, hambúrguer, queijo mussarela, calabresa e bacon.',
      img: 'assets/imgs/lanches/xbacon.jpg',
      preco: 18.90
    },
    {
      nome: "X-Tudo",
      desc: 'Pão, hambúrguer, queijo, alface, tomate, calabresa, bacon.',
      img: 'assets/imgs/lanches/xtudo.jpg',
      preco: 25.90
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}