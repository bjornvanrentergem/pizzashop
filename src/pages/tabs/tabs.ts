import { Component } from '@angular/core';

import { OrderPage } from '../order/order';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrderPage;
  tab2Root = CartPage;

  constructor() {

  }
}
