import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {BASE_URL} from "../constants";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  image: any;
  path: any;
  public hotelForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.hotelForm = this.formBuilder.group({
      name:[''],
      description:[''],
      image:[''],
      min_price:[''],
      max_price:[''],
      status:[''],
      category:[''],
      image_path:[''],
    })
  }

  hotel(){
    if(this.hotelForm.controls["name"].value != ''){
      if(this.hotelForm.controls["description"].value != ''){
        if(this.path != ''){
          if(this.hotelForm.controls["min_price"].value != ''){
            if(this.hotelForm.controls["max_price"].value != ''){
              if(this.hotelForm.controls["status"].value != ''){
                if(this.hotelForm.controls["category"].value != ''){
                  this.hotelForm.controls["image_path"].setValue(this.path)
                  this.http.post<any>(`${BASE_URL}/Hotel`,this.hotelForm.value).subscribe(
                    res=>{
                      alert("successful!")
                      this.hotelForm.reset()
                  },err=>{
                    console.log(err)
                    alert("Error!")
                  })
                }else{
                  alert("Category Required!")
                }
              }else{
                alert("Status Required!")
              }
            }else{
              alert("Max Price Required!")
            }
          }else{
            alert("Min Price Required!")
          }
        }else{
          alert("Image Required!")
        }
      }else{
        alert("Description Required!")
      }
    }else{
      alert("Name Required!")
    }
  }

  uploadImage(e:any){
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.image = file;
    }

    const formData = new FormData();
    formData.append('file',this.image)
    this.http.post<any>(`${BASE_URL}/Hotel/upload`,formData).subscribe(
      res=>{
        console.log(res)
        this.path=res.filename
    },err=>{
      console.log(err)
      alert("Server Error!")
    })
  }
}
