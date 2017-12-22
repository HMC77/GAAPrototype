import { TrainSessionsPage } from './../train-sessions/train-sessions';
import { DrillsPage } from './../drills/drills';
import { HomePage } from './../home/home';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';


/**
 * we will keep an array of pages, and those are of the type PageInterface which we defined above the class.
*  You will see why each element needs the attributes of that interface once we go through the functions.
*  Also, we grab a reference to the root navigation by using @ViewChild so we can directly work on that element!
*  Inside the array we keep 3 pages; two of them will be also tabs and 1 is just a special page which should have no tabs visible.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 // Basic root for our content view
  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

 pages: PageInterface[] = [
    { title: 'Drills', pageName: 'TabsPage', tabComponent: 'DrillsPage', index: 1, icon: 'football' },
    { title: 'Sessions', pageName: 'TabsPage', tabComponent: 'TrainSessionsPage', index: 2, icon: 'contacts' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}
