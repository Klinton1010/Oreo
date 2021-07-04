import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { studentModel } from './mycrud/mycrud.component';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServicecrudService {

  private readonly URL:string="http://localhost:8082/create";
  private readonly updateUrl:string="http://localhost:8082/update";

  constructor(private http:HttpClient) { }

  

  create(data:Object):Observable<Object>
  {
    console.log("this",data)
    return this.http.post("http://localhost:8082/create",data);
    
  }

  getAlldetails():Observable<studentModel[]>
  {
    console.log("claa")
    return this.http.get<studentModel[]>("http://localhost:8082/student")
  }

 
  update(mobile:any,data:Object):Observable<studentModel>
  {
    console.log("update");
    return this.http.put<studentModel>(`${this.updateUrl}/${mobile}`,data);
  }

  getByOne(mobile:any):Observable<studentModel>
  {
    return this.http.get<studentModel>(`http://localhost:8082/student/${mobile}`)
  }

  delete(mobile:any):Observable<studentModel>
  {
    return this.http.delete<studentModel>(`http://localhost:8082/delete/${mobile}`)
  }
}



