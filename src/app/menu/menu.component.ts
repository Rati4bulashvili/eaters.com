import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  burger = 10;
  pizza = 12;
  adjarian = 15;
  cake = 8;
  burgerAmount;
  pizzaAmount;
  adjAmount;
  cakeAmount;
  burgersPrice = "0";
  pizzasPrice = "0";
  adjsPrice = "0";
  cakesPrice = "0";
  fullPrice = 0;
  
  showBurger = false;
  showPizza = false;
  showKhachapuri = false;
  showCake = false;

  updateBurgers(x){
    if(x.value>0 && x.value<101){
      this.burgerAmount = "amount: " + x.value;  
      this.burgersPrice = x.value * this.burger + "$";
    }
    this.showBurger = true;
    
    if(x.value==0){
      this.showBurger = false;
      this.burgersPrice = "0";
    }
    this.calculate();
  }
  updatePizzas(x){
    if(x.value>0 && x.value<101){
      this.pizzaAmount = "amount: " + x.value;
      this.pizzasPrice = x.value * this.pizza + "$";
    }
    this.showPizza = true;
    
    if(x.value==0){
      this.showPizza = false;
      this.pizzasPrice = "0";
    }
    this.calculate();
  }
  updateAdjs(x){
    if(x.value>0 && x.value<101){
      this.adjAmount = "amount: " + x.value;
      this.adjsPrice = x.value * this.adjarian + "$";
    }
    this.showKhachapuri = true;
    
    if(x.value==0){
      this.showKhachapuri = false;
      this.adjsPrice = "0";
    }
    this.calculate();
  }
  updateCakes(x){
    if(x.value>0 && x.value<101){
      this.cakeAmount = "amount: " + x.value;
      this.cakesPrice = x.value * this.cake + "$";
    }
    this.showCake = true;
    
    if(x.value==0){
      this.showCake = false;
      this.cakesPrice = "0";
    }
    
    this.calculate();
  }
  
  calculate(){
    this.fullPrice = parseInt(this.cakesPrice) + parseInt(this.pizzasPrice) 
    + parseInt(this.adjsPrice) + parseInt(this.burgersPrice);
  }


  
  

  




}
