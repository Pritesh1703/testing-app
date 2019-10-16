import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {

  mobileList = [
    {name: 'iPhone 11', price: '100000', display: '../../assets/img/iphone11.jpg'},
    {name: 'One Plus 7t', price: '40000', display: '../../assets/img/oneplus7t.jpg'},
    {name: 'Vivo X1Z', price: '15000', display: '../../assets/img/vivox1z.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
