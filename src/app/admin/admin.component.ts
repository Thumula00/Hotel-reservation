import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor (private http: HttpClient,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    
    if(localStorage.getItem('type')!=null){
      if(localStorage.getItem('type')=="admin"){
        this.router.navigate(['admin'])
      }else if(localStorage.getItem('type')=="user"){
        this.router.navigate(['user'])
      }
    }else{
      this.router.navigate(['login'])
    }
  }
  
}
