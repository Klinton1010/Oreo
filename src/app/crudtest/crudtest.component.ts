import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Crudservice1Service } from '../crudservice1.service';



@Component({
  selector: 'crudtest',
  templateUrl: './crudtest.component.html',
  styleUrls: ['./crudtest.component.css']
})
export class CrudtestComponent implements OnInit {
  val:any="";
  gen:any=""
  constructor(public crud :Crudservice1Service) {
    this.val=this.crud.getMyValue(2)
    this.val.subscribe((vals:any)=>
      {
         this.gen=vals
      })

  }

  ngOnInit(): void {

    


  
  }

}
