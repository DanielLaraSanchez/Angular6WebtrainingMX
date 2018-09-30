import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './public/home/home.component';
import { AuthHomeComponent} from  './auth/auth-home/auth-home.component';
const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'

}, {
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'auth-home',
  component: AuthHomeComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
