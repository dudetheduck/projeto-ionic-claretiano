import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { LanchesPage } from '../pages/lanches/lanches';
import { PratosEntradaPage } from '../pages/pratos-entrada/pratos-entrada';
import { PratosRefeicaoPage } from '../pages/pratos-refeicao/pratos-refeicao';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { CardPage } from '../pages/card/card';
import { PromocaoPage } from '../pages/promocao/promocao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidasPage,
    LanchesPage,
    PratosEntradaPage,
    PratosRefeicaoPage,
    SobremesasPage,
    CardPage,
    PromocaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidasPage,
    LanchesPage,
    PratosEntradaPage,
    PratosRefeicaoPage,
    SobremesasPage,
    CardPage,
    PromocaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}