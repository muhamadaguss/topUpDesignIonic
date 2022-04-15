import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  features: any[] = [
    {id:1,name:"Top Up",src:"assets/icons/top-up.png",background:'background: rgba(45, 211, 111, 0.1)',page:''},
    {id:2,name:"Withdraw",src:"assets/icons/cash-withdrawal.png",background:'background: rgba(45, 211, 111, 0.1)',page:''},
    {id:3,name:"Send",src:"assets/icons/send.png",background:'background: rgba(45, 211, 111, 0.1)',page:''},
    {id:4,name:"Pay",src:"assets/icons/debit-card.png",background:'background: rgba(45, 211, 111, 0.1)',page:''},
  ];

  transactions: any[] = [
    {id:1,vendor:"Flaticons",image:"",amount:"100000",time:'03:00 PM',},
    {id:2,vendor:"Phone Transfer",image:"",amount:"-100000",time:'04:00 PM',}
  ];

  constructor() {}

}
