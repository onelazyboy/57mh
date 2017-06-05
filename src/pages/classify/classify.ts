import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  openMenu() {
    this.menuCtrl.open();
  }

  search(){
    this.navCtrl.push( 'SearchPage' );
  }

  openClassifyData(title,or){
    this.navCtrl.push( 'ComicsDataPage', {
      title: title,
      or:or
    } );
  }



}