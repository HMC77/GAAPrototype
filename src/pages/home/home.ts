import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainSessionsPage } from './../train-sessions/train-sessions';
import { DrillsPage } from './../drills/drills';
import { TabsPage } from './../tabs/tabs';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

navigateToDrillsPage() {
  this.navCtrl.push('DrillsPage');
}

navigateToTrainSessionsPage() {
  this.navCtrl.push('TrainSessionsPage');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
