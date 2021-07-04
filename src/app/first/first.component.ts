import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  intial:number=15;
  counter:number=0;
  incCount()
  {
    this.counter++;
  }
  /*counter:number=0
  a:any=0
  constructor() {
   
   }
    startCount()
    {
      this.a=setInterval(()=>{this.counter++},1000)
    }
   

   stopCount()
   {
    clearInterval(this.a);
    this.counter=0
   }*/

  ngOnInit() {
    
    }


}
