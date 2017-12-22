import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrillDetailPage } from './drill-detail';

@NgModule({
  declarations: [
    DrillDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DrillDetailPage),
  ],
})
export class DrillDetailPageModule {}
