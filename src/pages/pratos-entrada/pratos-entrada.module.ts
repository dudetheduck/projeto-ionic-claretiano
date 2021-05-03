import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PratosEntradaPage } from './pratos-entrada';
import { CardPage } from '../card/card';

@NgModule({
  declarations: [
    PratosEntradaPage,
    CardPage
  ],
  imports: [
    IonicPageModule.forChild(PratosEntradaPage),
  ],
})
export class PratosEntradaPageModule {}
