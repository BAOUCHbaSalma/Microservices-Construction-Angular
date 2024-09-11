import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { CostumerTestComponent } from './costumer-test/costumer-test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistreComponent},
  {path:'admin',component:AdminTestComponent},
  {path:'customer',component:CostumerTestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
