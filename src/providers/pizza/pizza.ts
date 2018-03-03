import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PizzaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaProvider {
  pizzas = [
    {"id":1, "naam":"Margherita", "url":"assets/img/margarita.jpg"},
    {"id":2, "naam":"Pepperoni", "url":"assets/img/pepperoni.jpg"},
    {"id":3, "naam":"Quattro Formaggi"},
    {"id":4, "naam":"Vegetariana"},
    {"id":5, "naam":"Carciofi"},
    {"id":6, "naam":"Funghi"},
    {"id":7, "naam":"Quattro Stagioni"},
    {"id":8, "naam":"Calzone"},
    {"id":9, "naam":"Capricciosa"},
    {"id":10, "naam":"Prosciutto"},
    {"id":11, "naam":"Diavola"},
    {"id":12, "naam":"Napoli"},
    {"id":13, "naam":"Romana"},
    {"id":14, "naam":"Tonno"},
    {"id":15, "naam":"Frute di Mare"}
  ]

  constructor() {
    console.log('Hello PizzaProvider Provider');
  }

  getAll(){
    return this.pizzas;
  }

}
