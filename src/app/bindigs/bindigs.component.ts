import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindigs',
  templateUrl: './bindigs.component.html',
  styleUrls: ['./bindigs.component.css']
})
export class BindigsComponent implements OnInit {

  constructor() { }

  
 // @HostBinding('style.color')color='red';

 /* @HostListener('click')function()
  {
    this.color='blue'
  }*/


  ngOnInit(): void {
  }

}
