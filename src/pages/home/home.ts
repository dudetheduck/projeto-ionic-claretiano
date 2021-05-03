import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { PromocaoPage } from '../promocao/promocao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: Object
  pushPage: any

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
    this.pushPage = PromocaoPage
  }

  novaPagina() {
    this.navCtrl.push(PromocaoPage)
  }
}
