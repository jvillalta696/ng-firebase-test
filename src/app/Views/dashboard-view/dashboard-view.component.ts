import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(private useAuth:UserAuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signout(){
    this.useAuth.signout()
    .then(()=>this.router.navigate(['login']))
    .catch(error=>console.log(error))
  }

}
