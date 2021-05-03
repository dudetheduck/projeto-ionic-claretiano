import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { LanchesPage } from '../pages/lanches/lanches';
import { PratosEntradaPage } from '../pages/pratos-entrada/pratos-entrada';
import { PratosRefeicaoPage } from '../pages/pratos-refeicao/pratos-refeicao';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Pratos de Entrada', component: PratosEntradaPage},
      { title: 'Pratos de Refeição', component: PratosRefeicaoPage},
      { title: 'Lanches', component: LanchesPage},
      { title: 'Sobremesas', component: SobremesasPage},
      { title: 'Bebidas', component: BebidasPage} 
    ]
  }
  openPage(page: any): void {
    this.nav.push(page.component)
  }
}