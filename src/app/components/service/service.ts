import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service implements OnInit{
    master=inject(Master);//service
    cdr=inject(ChangeDetectorRef);
    userList:any[]=[];
    ngOnInit(): void {
      this.master.getUsers().subscribe({
        next:(res:any)=>{
          this.userList=res;
          this.cdr.detectChanges();
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
}
