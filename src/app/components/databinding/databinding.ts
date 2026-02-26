import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  courseName:string="Angular";
  productPrice:number=999;
  className:string="myclass";
  constructor(){

  }
  showMessage(){
    alert("This is done using event binding")
  }
  changeCourseName(){
    this.courseName="Angular tutorial";
  }
  onCityChange(){
    alert("City changed");
  }
}

