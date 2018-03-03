import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaProvider } from '../../providers/pizza/pizza';
import { TabsPage } from '../tabs/tabs';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  pizzas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaProvider:PizzaProvider) {
    this.pizzas = pizzaProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  orderPizza(){
    console.log('Try to order a pizza');
    this.navCtrl.push(CartPage);
  }

}
