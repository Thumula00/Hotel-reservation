import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BASE_URL} from "../constants";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  API: string = BASE_URL

  search_hotel:String='';
  hotels:any;
  constructor (private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.http.get<any>(`${BASE_URL}/hotel`).subscribe(
      results=>{
        this.hotels=results
        console.log(results)
    },err=>{
      console.log(err)
      alert("Connection Error!")
    })
  }
}
