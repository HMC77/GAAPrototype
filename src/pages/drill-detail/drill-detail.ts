import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//A Provider to retirieve data from a JSON file : 
import { DrillsDataProvider } from '../../providers/drills-data/drills-data';

/**
 * Generated class for the DrillDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drill-detail',
  templateUrl: 'drill-detail.html',
})
export class DrillDetailPage {
drillId: any;
drillname: any;
drillpic: any;
drilldesc: any;
drillteach: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewWillEnter() {
    this.drillId = this.navParams.data.Id ;
   this.drillname = this.navParams.data.name ;
   this.drillpic = this.navParams.data.pic ;
   this.drilldesc = this.navParams.data.desc ;
   this.drillteach = this.navParams.data.teach ;
   //Temp code to print  Id to console log
   console.log( "HMC IN drill-detail.ts");
  console.log("drillId", this.drillId);
   console.log("drillname = ", this.drillname);
   console.log("Drill desc =  ", this.drilldesc)
   console.log("Drill teach =  ", this.drillteach)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrillDetailPage');
  }

}
