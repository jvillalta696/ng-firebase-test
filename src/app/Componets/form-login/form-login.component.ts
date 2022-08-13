import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  //atributes
  loginForm:FormGroup;
  error:string;
  user:User;
  constructor(
    private useAuth:UserAuthService,
    private router:Router
  ) { 
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      psw:new FormControl('')
    }),
    this.user ={email:'',psw:''}
    this.error = ''
  };

  ngOnInit(): void {
  }
  signup(){
    this.user = this.loginForm.value;
    this.useAuth.signup(this.user)
    .then(res=>{
      console.log(res)
      this.error = '';
    })
    .catch(err=>{
      console.log(err);
      this.error = err.toString();
    })

  }
  signin(){
    this.user = this.loginForm.value;
    this.useAuth.signin(this.user)
    .then(res=>{
      console.log(res);
      this.error = '';
      alert('Login Successfully'),
      this.router.navigate(['dashboard'])
    })
    .catch(err=>{
      console.log(err);
      this.error = err.toString();
    })
    
  }

}
