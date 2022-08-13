import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './Views/dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';

const routes: Routes = [
  {path: 'login',
component:LoginViewComponent},
{
  path:'',
  component:DashboardViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
