import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaycomponentComponent } from './displaycomponent/displaycomponent.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"form",component:FormComponent},
  {path:"display",component:DisplaycomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
