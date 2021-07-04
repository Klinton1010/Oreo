import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ServicecrudService } from '../servicecrud.service';


export class studentModel
{
  id:any;
  sname?:string;
  age:any;
  course?:string;
  mobile?:string;
  city?:string;
}

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent implements OnInit {

  constructor(private curd:ServicecrudService) { }

  student:studentModel=new studentModel();
  
  submit(form:NgForm):void
  {
    console.log(form.value)
    this.curd.create(form.value).subscribe((res: any)=>console.log(res))
  }

  getAll():void
  {
    this.curd.getAlldetails().subscribe(res=>console.log(res))
  }
  ngOnInit(): void {
    console.log("called")
    this.getAll();
  }

}
