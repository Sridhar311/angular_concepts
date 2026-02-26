import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getapi.html'
})
export class Getapi {

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  cdr = inject(ChangeDetectorRef);
  userList: any[] = [];
  isLoading = true;
  todoList:any=[];
  Bookings:any[]=[];
  ngOnInit() {
    this.loadUsers();
    this.getTodoItems();
    this.getAllBusBooking();
  }

  loadUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.userList = res;
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log(this.userList);
      });
  }
  getTodoItems(){
    this.http.get("https://jsonplaceholder.typicode.com/todos")
    .subscribe((res:any)=>{
      this.todoList=res;
      console.log(this.todoList);
      this.cdr.detectChanges();
    })
  }
  getAllBusBooking(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers")
    .subscribe((res:any)=>{
      this.Bookings=res.data;
      console.log(this.Bookings);
      this.cdr.detectChanges()
    })
  }
}