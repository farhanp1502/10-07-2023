import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '10-07-2023';
  constructor(private router:Router){

  }
  // this is how we use navigate in code of logic 
  // if it is logged true it goes to actorsdetail 
  // else login
  islogged = true; // try with false
  checkout(){
    if(this.islogged){

      this.router.navigate(['/actorsdetail'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}
