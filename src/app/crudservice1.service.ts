import { Injectable, NgModule } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Crudservice1Service {

  constructor(private http:HttpClient) { }
  data?:Observable<any>
  val?:any

  getMyValue(dl:any):Observable<any>
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${dl}`);
    
  }

  
  ngOnInit(): void {
   

}
}
