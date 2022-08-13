import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './Views/dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard/'

const routes: Routes = [
  {path: 'login',
component:LoginViewComponent},
{
  path:'',
  pathMatch:'full',
  redirectTo:'/dashboard' 
  
},
{
  path:'dashboard',
  component:DashboardViewComponent,
  ...canActivate(()=>redirectUnauthorizedTo(['login']))
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
