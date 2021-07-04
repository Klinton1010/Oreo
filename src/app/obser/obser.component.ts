import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.css']
})
export class ObserComponent implements OnInit {

  orderStatus:any='';
  data?:Observable<any>
  data1?:Observable<any>
  constructor() { }

  ngOnInit(): void {

    this.data1=new Observable(observer=>{
      setTimeout(()=>{
        observer.next("In process")
      },2000)
      setTimeout(()=>{
        observer.next("Processing")
      },4000)

      setTimeout(()=>
      {
        observer.complete();
      },7000)
      setTimeout(()=>{
        observer.next("completed")
      },8000)
    })
    
    this.data1.subscribe(val=>{
      this.orderStatus=val;
    })

    this.data1.subscribe(sec=>
      {
        console.log("This is second sub")
      })
  }



}
