import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { DrillDetailPage } from '../pages/drill-detail/drill-detail';
//A Provider to retirieve data from a JSON file : 
import { DrillsDataProvider } from '../providers/drills-data/drills-data';

import { IonicStorageModule } from '@ionic/storage';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    //HomePage,
      LoginPage,
      DrillDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   // HomePage,
    LoginPage,
    DrillDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrillsDataProvider
  ]
})
export class AppModule {}
