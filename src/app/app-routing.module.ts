import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component'
import { ActorsdetailComponent } from './actorsdetail/actorsdetail.component'
import { NotfoundComponent } from './notfound/notfound.component'
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  // this is how we organize the table for routing 
  {path:'',redirectTo:'actors',pathMatch:'full'},
  {path:'actors', component: ActorsComponent },
  {path: 'actorsdetail' ,component:ActorsdetailComponent },
  {path:'login',component:LoginComponent},
  {path: 'actors/:number', component: ActorsdetailComponent },
  {path:'**',component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
