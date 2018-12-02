import { Component } from "@angular/core";
import {
  NavController,
  App,
  AlertController,
  ToastController
} from "ionic-angular";
import { WelcomePage } from "../welcome/welcome";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private app: App,
    private alerter: AlertController,
    private toaster: ToastController
  ) {}

  logout() {
    //Presents a confirmation dialog
    this.presentConfirm("Wonna Log out?", "Are you sure?", () => {
      this.toaster
        .create({
          message: "Logout success",
          duration: 2000
        })
        .present();
      this.app.getRootNav().setRoot(WelcomePage);
    });
    //this.navCtrl.push(WelcomePage);
  }

  //A simple function to present confirmation dialogue
  private presentConfirm(title: string, message: string, handler: Function) {
    let alert = this.alerter.create({
      title: title,
      message: message,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            //
          }
        },
        {
          text: "Yes",
          handler: () => {
            handler();
          }
        }
      ]
    });
    alert.present();
  }
}
