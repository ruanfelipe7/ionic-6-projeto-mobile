import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { TabsPageModule } from '../tabs/tabs.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
  }

  goToTabPage(){
    this.navCtrl.navigateForward('/tabs');
  }

}
