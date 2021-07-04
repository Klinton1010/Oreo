import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { studentModel } from '../crud/crud.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  private readonly URL:string="http://localhost:8090/studentinfoapi/wci/student/create";

  constructor(public http:HttpClient) { }

  create(data:studentModel):Observable<studentModel>
  {
     return this.http.post<studentModel>(this.URL,data);
  }
}
