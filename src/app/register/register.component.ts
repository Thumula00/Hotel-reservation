import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {BASE_URL} from "../constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:[''],
      phone:[''],
      email:[''],
      password:[''],
      type:[''],
    })
  }

  register(){
    if(this.registerForm.controls["name"].value != ''){
      if(this.registerForm.controls["phone"].value != ''){
        if(this.registerForm.controls["email"].value != ''){
          if(this.registerForm.controls["password"].value != ''){
            this.registerForm.controls["type"].setValue('user')
              this.http.post<any>(`${BASE_URL}/User`,this.registerForm.value).subscribe(
                res=>{
                  console.log(res)
                  alert("successful!")
                  this.registerForm.reset()
                  this.router.navigate(['login'])
              },err=>{
                console.log(err)
                alert("Error!")
              })
          }else{
            alert("Password Required!")
          }
        }else{
          alert("Email Required!")
        }
      }else{
        alert("Phone Required!")
      }
    }else{
      alert("Name Required!")
    }
  }
}
