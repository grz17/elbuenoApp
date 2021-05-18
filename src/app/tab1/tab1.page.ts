import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}
  ngOnInit(): void {
 console.log("Hola Mundo x 2");
 let n1=55;
 let n2=10;
 let total = n1+n2;
 console.log(total);
  }

}
