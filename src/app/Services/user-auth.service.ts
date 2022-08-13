import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword}from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth:Auth) { }

  signup({email,psw}:any){
    return createUserWithEmailAndPassword(this.auth,email,psw)
  };
}
