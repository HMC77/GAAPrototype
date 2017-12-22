import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainSessionsPage } from './train-sessions';

@NgModule({
  declarations: [
    TrainSessionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainSessionsPage),
  ],
})
export class TrainSessionsPageModule {}
