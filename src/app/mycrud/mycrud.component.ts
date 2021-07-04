import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  selector: 'app-mycrud',
  templateUrl: './mycrud.component.html',
  styleUrls: ['./mycrud.component.css']
})



export class MycrudComponent implements OnInit {
  
  isEdit?:boolean=false;
  found?:boolean;
  totalRecords?:Number
  studentList:studentModel[]=[];
  constructor(private curd:ServicecrudService) { }

  student:studentModel=new studentModel();

  
  submit(form:NgForm):void
  {
    if(!this.isEdit)
    {
    console.log(this.student)
    this.check();
    if(this.found)
    {
      form.resetForm();
      return alert("Mobile Number already found")
    }
    this.curd.create(this.student).subscribe((resp)=>{console.log(resp)
    form.resetForm();
    this.getAll();
    })
  }
  else
  {
    //this.editme(this.student);
    console.log("after update is clicked")
    this.curd.update(this.student.mobile,this.student).subscribe((upd)=>{console.log(upd); this.student=upd
    form.resetForm();
    this.isEdit=false;
    this.getAll();
    });
    
  }
  }

  
    editme(stud:studentModel)
    {
      this.getByOne(stud);
       this.isEdit=true;
    }

    getByOne(stud:studentModel):any
    {
      this.curd.getByOne(stud.mobile).subscribe((res)=>
      {
      this.student=res});
      
    }
    delete(stud:studentModel)
    {
         const conform=window.confirm("Do you really want to delete");
         if(conform)
         {
          this.curd.delete(stud.mobile).subscribe((res)=>
          {
            this.getAll();
          });
        }
          
    }

  check():any
  {
    this.getAll()
    for(let i=0;i<this.studentList.length;i++)
    {
    if(this.studentList[i].mobile===this.student.mobile)
       this.found=true;
      //alert("Mobile No already found please try with new number")
    }
  }

  getAll():void
  {
    this.curd.getAlldetails().subscribe(res=>
      {
        this.studentList=res;
        this.totalRecords=this.studentList.length
      });

  }
  ngOnInit(): void {
    this.getAll();
  }

}
