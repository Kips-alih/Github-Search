import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

{ path: "home",component: GithubComponent},
{ path: "form",component: FormComponent},
{ path: 'about', component: AboutComponent},
{ path: '', redirectTo:"home", pathMatch:"full"},
{ path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
