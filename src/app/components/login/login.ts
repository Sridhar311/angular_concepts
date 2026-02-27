import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userObj:any={
    email:'',
    password:''
  }
  router=inject(Router);
  master=inject(Master);
  onSubmit(){
    if(this.userObj.email=="admin@gmail.com" && this.userObj.password==1111){
      this.router.navigateByUrl("/admin");
      localStorage.setItem("Angular","Admin");
      this.master.onLogin.next(true);
    }
    else{
      alert("Invalid credential");
    }
  }
}
