import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import io from 'socket.io-client';
import {BASE_URL} from "../constants";

const socket = io(BASE_URL);

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

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
      this.bookForm.controls["hid"].setValue(params['id'])
    })
    if(localStorage.getItem('type')!=null){

    }else{
      this.router.navigate(['login'])
    }
  }

  book(){
    if(this.bookForm.controls["hid"].value != ''){
      if(this.bookForm.controls["rooms"].value != ''){
          if(this.bookForm.controls["adate"].value != ''){
            if(this.bookForm.controls["ddate"].value != ''){
              if(this.bookForm.controls["ac"].value != ''){
                this.bookForm.controls["user_id"].setValue(localStorage.getItem('id'))
                this.http.post<any>(`${BASE_URL}/Book`,this.bookForm.value).subscribe(
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
