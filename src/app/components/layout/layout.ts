import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  protected readonly title = signal('concepts');
  router=inject(Router);
  loggedUserName:string="";
  cdr=inject(ChangeDetectorRef)
  constructor(private master:Master){
    this.readLoggedData();    
    this.master.onLogin.subscribe(res=>{
      this.readLoggedData();
    })
  }
  readLoggedData(){
    const loggedValue=localStorage.getItem("Angular");
    if(loggedValue!=null){
      this.loggedUserName=loggedValue;
    }
  }
  onLogout(){
    localStorage.removeItem("Angular");
    this.router.navigateByUrl('login')
    this.loggedUserName='';
  }
}
