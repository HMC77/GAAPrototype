import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

// setRoot() which basically resets the navigation instead of pushing 
//a new page onto the stack. 
//Otherwise we would have a back arrow to the login page 
//which we don’t really want.
  doLogin() {
    this.navCtrl.setRoot('MenuPage');
  }

}
