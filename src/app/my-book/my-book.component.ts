import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import io from 'socket.io-client';
import {BASE_URL} from "../constants";

const socket = io(BASE_URL);

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.css']
})
export class MyBookComponent {

  books: any;

  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.http.get<any>(`${BASE_URL}/Book/`+localStorage.getItem('id')).subscribe(
      res=>{
        console.log(res)
        this.books = res
      },err=>{
        console.log(err)
        alert("Connection Error!")
      })
  }

  removeBook(id:any){
    this.http.delete<any>(`${BASE_URL}/Book/`+id).subscribe(
      res=>{
        socket.emit('hotel','book')
        console.log(res)
        alert("successful!")
        location.reload()
    },err=>{
      console.log(err)
      alert("Connection Error!")
    })
  }

}
