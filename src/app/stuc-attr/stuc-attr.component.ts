import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuc-attr',
  templateUrl: './stuc-attr.component.html',
  styleUrls: ['./stuc-attr.component.css']
})
export class StucAttrComponent implements OnInit {

  constructor() { }

  display=true;

  names=[{Lang:"Hindi"},{Lang:"English"},{Lang:"Hindi"}]
  tempContext={$implicit:"helo John",name:"Hari"}

  change()
  {
    this.display=!this.display
   
  }
  
  ngOnInit(): void {
  }

}
