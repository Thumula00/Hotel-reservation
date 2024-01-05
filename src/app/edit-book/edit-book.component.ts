import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import io from 'socket.io-client';
import {BASE_URL} from "../constants";

const socket = io(BASE_URL);

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  book_id:any
  public bookForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      hid:[''],
      rooms:[''],
      adate:[''],
      ddate:[''],
      ac:[''],
      user_id:[''],
    })
    this.route.params.subscribe(params => {
      this.book_id=params['id']
      this.http.get<any>(`${BASE_URL}/Book/one/`+params['id']).subscribe(
      res=>{
        console.log(res)
        this.bookForm.controls["hid"].setValue(res.hid)
        this.bookForm.controls["rooms"].setValue(res.rooms)
        this.bookForm.controls["adate"].setValue(res.adate)
        this.bookForm.controls["ddate"].setValue(res.ddate)
        this.bookForm.controls["ac"].setValue(res.ac)
      },err=>{
        console.log(err)
        alert("Error!")
      })
    })
  }

  book(){
    if(this.bookForm.controls["hid"].value != ''){
      if(this.bookForm.controls["rooms"].value != ''){
          if(this.bookForm.controls["adate"].value != ''){
            if(this.bookForm.controls["ddate"].value != ''){
              if(this.bookForm.controls["ac"].value != ''){
                this.bookForm.controls["user_id"].setValue(localStorage.getItem('id'))
                this.http.put<any>(`${BASE_URL}/Book/`+this.book_id,this.bookForm.value).subscribe(
                  res=>{
                    socket.emit('hotel','book')
                    alert("successful!")
                    this.bookForm.reset()
                    this.router.navigate(['my_book'])
                  },err=>{
                    console.log(err)
                    alert("Error!")
                  })
              }else{
                alert("A/C Required!")
              }
            }else{
              alert("Departure Date Required!")
            }
          }else{
            alert("Arrival Date Required!")
          }
      }else{
        alert("Rooms Required!")
      }
    }else{
      alert("Hotel ID Required!")
    }
  }

}
