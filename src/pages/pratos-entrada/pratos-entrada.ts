import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CardPage } from '../card/card';
import {CardapioItem} from '../../app/interfaces/cardapio'

@IonicPage()
@Component({
  selector: 'page-pratos-entrada',
  templateUrl: 'pratos-entrada.html',
})
export class PratosEntradaPage {
  pratosEntrada: CardapioItem[] = [
    {
      nome: 'Tábua de Queijos',
      desc: 'Acompanha uma porção de queijo minas, ricota, mussarela, salame e vinho tinto Ravanal Cabernet Sauvignon.',
      img: "assets/imgs/entrada/queijo.jpg",
      preco: 57.90
    },
    {
      nome: 'Patê de Queijo Cottage',
      desc: 'Uma pequena porção de Patê de queijo cottage feita com manjericão, cebolinha e alho.',
      img: "assets/imgs/entrada/pate.jpg",
      preco: 46.60
    },
    {
      nome: 'Caldo de Mandioquinha',
      desc: 'Uma porção de caldo de mandioquinha feita com alho, cebola, tomates e linguiça calabresa Aurora.',
      img: "assets/imgs/entrada/caldo.jpg",
      preco: 25.50
    },
    {
      nome: 'Porção de Saladas Variadas',
      desc: 'Acompanha alface, tomate, pepino, cebola roxa e cenoura, temperada com azeite de oliva.',
      img: "assets/imgs/entrada/salada.jpg",
      preco: 14.89
    },
    {
      nome: 'Porção de Azeitonas',
      desc: 'Uma pequena porção de azeitonas, acompanha salame e vinho branco.',
      img: "assets/imgs/entrada/azeitona.jpg",
      preco: 9.90
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratosEntradaPage');
  }

  newPage(item: CardapioItem) {
    this.navCtrl.push(CardPage, {
      cardapioItem: item
    })
  }
}