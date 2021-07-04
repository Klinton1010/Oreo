import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'httpintercepter',
  templateUrl: './httpintercepter.component.html',
  styleUrls: ['./httpintercepter.component.css']
})
export class HttpintercepterComponent implements OnInit {

  constructor(public http:HttpClient) { }

  

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(data=>console.log(data),error=>console.log(error))
  }

}
