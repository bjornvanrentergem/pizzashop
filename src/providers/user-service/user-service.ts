import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  isLoggedIn:boolean = false;

  constructor(public afAuth: AngularFireAuth, public toastCtrl: ToastController) {
    console.log('Hello UserServiceProvider Provider');
  }

  login(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result)=>{
      console.log('Login result:', result);
      this.isLoggedIn = true;
    }).catch((error)=>{
      console.log('Error during login', error);
      this.presentToast(error.message);
      this.isLoggedIn = false;
    })
  }

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }

  presentToast(message:string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(()=>{
      console.log('Dismissed toast', message);
    });

    toast.present();
  }

}
