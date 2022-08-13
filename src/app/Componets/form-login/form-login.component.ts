import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  //atributes
  loginForm:FormGroup;
  user:User;
  constructor() { 
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      psw:new FormControl('')
    }),
    this.user ={email:'',psw:''}
  };

  ngOnInit(): void {
  }
  submit(){
    this.user = this.loginForm.value;
    console.log(this.user)
  }

}
