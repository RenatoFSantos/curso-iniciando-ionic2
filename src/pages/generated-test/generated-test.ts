import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTestPage');
  }

  buscarCep() : void {
    this.connectionService.getCep('36600000')
    .then((res) => {
      let json = res.json();
      console.log(json.localidade);
    }).catch((err) => {
      console.log(err);
    });

  }

}
