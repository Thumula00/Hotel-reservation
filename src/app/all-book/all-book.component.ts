import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import io from 'socket.io-client';
import {BASE_URL} from "../constants";

const socket = io(BASE_URL);

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent {

  books: any;

  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    socket.on('hotel', (res) => {
      console.log(res)
      location.reload()
    })
    this.http.get<any>(`${BASE_URL}/Book/admin/`+localStorage.getItem('id')).subscribe(
      res=>{
        console.log(res)
        this.books = res
      },err=>{
        console.log(err)
        alert("Connection Error!")
      })



  }

}
