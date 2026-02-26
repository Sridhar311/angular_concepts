import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud implements OnInit{
 http=inject(HttpClient);
 cdr=inject(ChangeDetectorRef);
 userList:any[]=[];
 userObject:any={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
    .subscribe((res:any)=>{
      this.userList=res;
      console.log(this.userList);
      this.cdr.detectChanges();
    })
  }
  onSave(){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObject)
    .subscribe({
      next:(res)=>{
        alert("User created Successfully");
        this.getUsers();
      },
      error:(error)=>{
        alert(error);
      }
    })
  }
  onEdit(item:any){
    this.userObject=item;
  }
  onUpdate(){
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.userObject.userId,this.userObject)
    .subscribe({
      next:(res)=>{
        alert("Updated Successfully");
        this.getUsers();
      },
      error:(error)=>{
        alert(error)
      }
    })
  }
  onReset(){
    this.userObject={
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }
  onDelete(id:number){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+id).
    subscribe({
      next:()=>{
        alert("Deleted successfully");
        this.getUsers();
      },
      error:(error)=>{
        alert(error.error)
      }
    })
  }
}
