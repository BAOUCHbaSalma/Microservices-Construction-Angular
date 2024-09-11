import { Component, OnInit } from '@angular/core';
import { Erole, LoginRequestDto } from '../../models/global.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../service/person/person.service';
import { DecodejwtServiceService } from '../../service/decodejwt/decodejwt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup

  constructor(private fb:FormBuilder,private route:Router,private srv:PersonService,private srp:DecodejwtServiceService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({

      username:'',
      password:''

    }
    )
  }

  loginMethod(){
    const login:LoginRequestDto={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    this.srv.Login(login).subscribe((res:any)=>{
      if (res && res.token) {
        console.log("login successs")
        localStorage.setItem("jwt", res.token)
        const role=this.srp.getRoleFromToken(res.token)
        if(role==Erole.ADMIN){
          this.route.navigateByUrl('admin')
        }
        else{
            this.route.navigateByUrl('customer')
          }
        }

    })}



}
