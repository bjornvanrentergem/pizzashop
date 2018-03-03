import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OrderPage } from '../pages/order/order';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';

import { PizzaProvider } from '../providers/pizza/pizza';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyAAAhrjKKy3reV-Qh_LjXVnLxpUl4mYC4c",
  authDomain: "pizzashop-c7eae.firebaseapp.com",
  databaseURL: "https://pizzashop-c7eae.firebaseio.com",
  projectId: "pizzashop-c7eae",
  storageBucket: "",
  messagingSenderId: "468042623154"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    OrderPage,
    CartPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    OrderPage,
    CartPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaProvider,
    AuthenticateProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
