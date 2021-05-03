import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardapioItem} from '../../app/interfaces/cardapio'

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  cardapioItem: CardapioItem

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardapioItem = this.navParams.get('cardapioItem')
  }
}
