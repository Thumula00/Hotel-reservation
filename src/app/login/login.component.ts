import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {BASE_URL} from "../constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    if(this.loginForm.controls["email"].value != ''){
      if(this.loginForm.controls["password"].value != ''){
            this.http.post<any>(`${BASE_URL}/User/login`,this.loginForm.value).subscribe(
              res=>{
                this.loginForm.reset()
                alert("login successful!")
                if(res.res=="admin"){
                  localStorage.setItem('type', 'admin');
                  localStorage.setItem('id', res.id);
                  this.router.navigate(['admin'])
                }else{
                  localStorage.setItem('type', 'user');
                  localStorage.setItem('id', res.id);
                  this.router.navigate(['user'])
                }
            },err=>{
              console.log(err.error.err);
              alert(err.error.err)
            })
      }else{
        alert("Password Required!")
      }
    }else{
      alert("Email Required!")
    }
  }
}
