import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, Loading, ToastController, TextInput } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  //Login Data::
  //username = joe
  //password = password

  @ViewChild('username') public username: TextInput;
  @ViewChild('password') public password: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toaster: ToastController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    let loading: Loading;
    loading = this.loadingCtrl.create({
      content: 'Signing you in, please wait...'
    });
    loading.present();

    //Simulating authentication
    if(this.username.value === 'joe' && this.password.value === 'password'){
      //Simulate login in to server.
      setTimeout(() => {
        loading.dismiss();
        this.toaster.create({
          message: 'Login Success!',
          duration: 2000
        }).present();
        this.navCtrl.push(TabsPage);
      }, 3000);
    }
    else{
      setTimeout(()=>{
        loading.dismiss();
        this.toaster.create({
          message: 'Login Failed..invalid credentials',
          duration: 2000
        }).present();
      }, 3000)
    }
  }


}

