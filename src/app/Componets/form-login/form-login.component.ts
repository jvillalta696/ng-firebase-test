import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  //atributes
  loginForm:FormGroup;

  constructor() { 
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      psw:new FormControl('')
    })
  };

  ngOnInit(): void {
  }
  submit(){
    console.log(this.loginForm.value)
  }

}
