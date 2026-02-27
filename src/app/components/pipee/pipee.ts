import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NAPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipee',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,SlicePipe,JsonPipe,NAPipe],
  templateUrl: './pipee.html',
  styleUrl: './pipee.css',
})
export class Pipee {
  sentence:string="Hi how are you?";
  courseName:string="Angular course";
  currDate:Date=new Date();
  rollNo:number[]=[53,20,46,56,29,30];
  name:string="Sridhar";
  userObj={
    name:"Sridhar",
    age:21,
    address:{
      city:"Bangalore",
      pincode:"630571"
    }
  };
  userObj1={
    name:"Sridhar",
    age:21,
    address:{
      city:"",
      pincode:"630571"
    }
  };
  cp:unknown=undefined;
}
