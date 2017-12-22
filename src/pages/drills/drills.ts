import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrillDetailPage } from '../drill-detail/drill-detail';
//A Provider to retirieve data from a JSON file : 
import { DrillsDataProvider } from '../../providers/drills-data/drills-data';
/**
 * Generated class for the drillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drills',
  templateUrl: 'drills.html',
  providers:[DrillsDataProvider]
})
export class DrillsPage {

//public item: any = {};

data:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public drillsService : DrillsDataProvider) {
  }
  

  goToDrillDetail(Drilldata: any) {
    // go to the Drill Detail page
    // and pass in the information about the drill

this.navCtrl.push(DrillDetailPage, { Id: Drilldata.data.id, name: Drilldata.data.drillname, pic: Drilldata.data.profilePic, desc : Drilldata.data.description, teach : Drilldata.data.teachingPoints});
    //this.navCtrl.push(DrillDetailPage, { Id: Drilldata.data.id, name: Drilldata.data.drillname });
    //Temp bit of code to see if function was accessed 
    console.log("HMC ::::::   goToDrillDetail has been accessed")
    console.log("DrillID = ", Drilldata.data.id);
    console.log("name  = ", name);
    console.log("Drilldata.data.drillname =  ", Drilldata.data.drillname)
    console.log("Drilldata.data.profilePic =  ", Drilldata.data.profilePic)
    console.log("Drilldata.data.description =  ", Drilldata.data.description)
    console.log("Drilldata.data.teachingPoints =  ", Drilldata.data.teachingPoints)
    
  }


//Teh drills Service request the data to be passed infrom the json file  through the Provider in drill-data.ts
ionViewDidLoad(){
    this.drillsService.getRemoteData().subscribe(data=>{
      this.data=data.data;console.log(this.data);});

} 

}
